# Damage

A tool to track invoice (the _damage_).

## What I need to track

- Clients
  - name
  - address
  - address 2
  - city
  - state
  - zip
  - email
  - phone
- Job Desciption (multiple lines)
- Total (or should I track hours and hourly rate?)
- Notes (text area)
- Invoice number (generated)
- Invoice date (date generated? or self-entry?)

## Some thoughts

- Store info in a tab delimited format
- I'll need a file for invoices and a file for clients
- I could store this information in local storage and provide a way to output a "backup" file...
- I want to output to a PDF; I could either print to PDF or I could find a library that converts HTML to PDF
- Styling will be handled with a print media style sheet
- Clients will need to be edited
- It would be nice to search invoices
