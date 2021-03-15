# How to run

This project was developed using the latest version of yarn. To run this project please install yarn 2.

1. Run `npm install -g yarn` to update the global yarn version to latest v1
2. cd into the project and do `yarn start`

I'm using yarn PnP so there is **no need** to run `yarn install`

For more information please go to https://yarnpkg.com/getting-started/migration

# Assumptions

The csv header names and casing **must match** the columns in the document sent to me. Those columns are.

- UUID
- VIN
- Make
- Model
- Mileage
- Year
- Price
- ZipCode
- CreateDate
- UpdateDate


# API

The API endpoint is a `POST` `localhost:3000/csv` the form must have `csvFile` which is a `multipart/form-data` type and a `providerName` which is a `string` type.

You can use the page I create in `public/index.html`