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
* Affiliations
  * ABeaK
  * AACSB
  * EQUIS
  * nplusi network
  * ISEP
  * GE3
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

### City

* Name
* Country
* GPS location
* Average Temperature for month
* Cost of living

### Country

* Name
* Region
* Population
* Health
* National income and outcome
* Employment
* Human security
* Mobility
* Perceptions of well-being
* Human rights treaties
* Gender inequality
* COVID-19 vaccination rate
