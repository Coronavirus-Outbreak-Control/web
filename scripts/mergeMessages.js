const fs = require('fs')
const globSync = require('glob').sync

const DEFAULT_LANGUAGE = 'en'
const MESSAGES_PATTERN = './build/messages/**/**/*.json'
const WRITE_PATH = './src/locale/data.json'
const TRANSLATIONS_PATTERN = './public/locale/*.json'

// Takes a filename: ./public/locales/it.json
// Returns the locale: it
const getFilenameLocale = filename => {
  const endOfFilename = filename.split('/').slice(-1).pop()
  const locale = endOfFilename.split('.json')[0]

  return locale
}

// Takes a filename: ./public/locales/it.json
// Returns the content as a JSON object
const getFileContents = filename => {
  const file = fs.readFileSync(filename, 'utf8')
  const parsedFile = JSON.parse(file)

  return parsedFile
}

// Tries to delete existing locale data
try {
  if (fs.existsSync(WRITE_PATH)) {
    //file already exists, so delete it
    fs.unlinkSync(WRITE_PATH)
  }
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(error)
}

/*
 * Grabs all 'translation' files. Uses the locale in their filename to
 * create an object with all the locales and their translations.
 */
const mergedTranslations = globSync(TRANSLATIONS_PATTERN)
  .map(filename => {
    const locale = getFilenameLocale(filename)
    const fileContents = getFileContents(filename)

    return {
      [locale]: fileContents
    }
  })
  .reduce((acc, localeObj) => ({
    ...acc, ...localeObj
  }), {})

/*
 * Grabs all the default message id's and values found using the react-intl
 * Babel plugin, checks if theyre are duplicates and creates an object of
 * those keys and values
 */
const defaultMessages = globSync(MESSAGES_PATTERN)
  .map(filename => getFileContents(filename))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`)
      }
      collection[id] = defaultMessage
    })

    return collection
  }, {})

/*
 * Writes to a file:
 * 1. the default messages as the default language
 * 2. all the other country translations
 */
fs.writeFileSync(
  WRITE_PATH,
  JSON.stringify(
    {
      [DEFAULT_LANGUAGE]: defaultMessages,
      ...mergedTranslations
    }, null, 2
  )
)