# World Campus - Data Collection

Based on the [offical recruit notice](2022-2-exchange-univ.csv) from the
origin ueiversity, the information about the exchange program, the
universities and their cities & countries is gathered and arranged. The items
to be collected can be specified through the [development
document](../README.md). The result dataset is provided in JSON format within
one or two files.

## Exchange Program

It includes the recruit information for each university. Most of basic
information is arranged nicely in the official notice. The detailed
information is usually specified in the target university's posts. 

* Name
* University
* Official link
* Recruit number
* Period
* Recruit restriction
  * Major
  * Nationality
  * Leave of absence
  * Others
* Qualification
  * GPA
  * TOEFL IBT (RLSW)
  * IELTS (RLSW)
  * TOEFL ITP
* Course
  * Restriction
  * Taking other major
  * English course
  * Note
  * Link
* Accomodation
  * On-campus
  * Off-campus
  * Note
* Deadline
  * Nomination
  * Application

## University

* Name
* Official link
* Map link
* Region
* Country
* City
* Established year
* Student number
* Faculty number
* Campus Size
* Ranking
  * Overall
  * Computer Science
  * Art & Humanities

## Location

Fact data is derived from the references below;

* [Our World in Data](https://ourworldindata.org)
* [OECD Stats](https://stats.oecd.org)
* [UN Data](http://data.un.org)
* [Human Development Report](https://hdr.undp.org/en)
* [Race Diversity](https://www.infoplease.com/world/social-statistics/ethnicity-and-race-countries)
* [Cost of Living](https://www.numbeo.com/cost-of-living/region_rankings.jsp)
* [Weathers](https://worldweather.wmo.int/en/dataguide.html)

### City

* Name
* Country
* Average temperature 
* Average precipitation

### Country

* Name
* Region
* Population (7, Total)
* Health (8, life expectancy, health expenditure)
* Education (9, at least secondary, tertiary)
* National income and outcome (10, total, per capita)
* Cost of living (10, price index)
* Employment (11, labor force participation, unemployeement)
* Human security (12, homicide, suicide)
* Financial flow (13, Trade, foregin investment)
* Human mobility (13, international student, tourists)
* Gender inequality (5, inequality index, rank, parliament)
* Environment (D4, fossil fuel, carbon dioxide per GDP)

COVID-19

* Infection
* Death
* Vaccination
