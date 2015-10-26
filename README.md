# HOF Transpiler

Home office forms transpiler is a tiny tool that can be used as part of a build or manually to convert multipart locales files into one default.json. This is used in our stack for translations of form applications.

## Installation


```npm install --save-dev hof-transpiler```

## Usage

```
hof-transpiler [source dir|glob] {OPTIONS}

       --shared, -s  A path or glob to a directory of shared translations

  --writeShared, -w  Generate a built JSON file of the the shared
                     translations. Default setting is false.

```

## Example

Lets say you have a directory such as: ```translations/src/en```

Which contains:
```
buttons.json
emails.json
errors.json
validation.json
```

If you run hof-transpiler against the directory ```hof-transpiler ./translations/src```

It will iterate through src and for each directory it will create a new directory at the root level with a built default.json file ```translations/en/default.json```

Which will look something like

```
{
  "buttons": {
    json blob from buttons.json
  },
  "emails": {
    json blob from emails.json
  },
  "errors": {
    json blob from errors.json
  },
  "validation": {
    json blob from validation.json
  }
}
```

This is used further down the hof stack for application translations.
