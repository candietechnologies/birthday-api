# birthday-api
This is a free API to generate day, months and years for you to use to collect users birthdays.

To get Days,
call https://birthday-fy36.onrender.com/api/v1/days

To get months,
call https://birthday-fy36.onrender.com/api/v1/months

To get years,
call https://birthday-fy36.onrender.com/api/v1/years.

You can add a query to filter the years result.
this endpoint only accept MIN as a query, and set MIN to the minimum year you want to get.

for example
https://birthday-fy36.onrender.com/api/v1/years?min=2010.

this will fetch all the years from 1900 - 2010.

NOTE: Years range from 1900 - 2023.

MONTH return MONTHINDEX, MONTH ABBREVIATION & MONTH NAME

DAYS return 1-31

Request does not require any form of authentication.
But there's an 100 requests per hour limit.


#ENJOY
