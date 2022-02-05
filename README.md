# World Campus

> Supporting the Choice of University for Exchange Programs

## Abstract

World Campus is a mobile web application that can support the decision for a student
considering which campus to apply for an exchange program. This application
provides enormous information about outgoing university and countries with
user-friendly layouts and designs. While assisting the arrangement of
considerations, it helps students efficiently to make their own preference list
of universities for an exchange program.

**Index Terms** Information Systems, Decision Supporting Systems, Web
Application, Mobile, Reactjs

## Introduction

### Motivation

The idea for this application stems from the personal experience, making the
application of exchange program. I had to choose 15 at maximum universities
among more than 80 ones. Checking the suitability, such as English
requirements and Course restrictions, for each university and every conditions
consumed long time repeatedly. I though that handling the huge number of cells
and sites could be effeciently processed through an information system. By
reducing the redundant non-judgemental operations can be beneficial to make an
clear and well-informed decision.

### Problem Statement

Determining whether I can apply this university or not is simple task but takes
long time. Every comparision of my English test score, major and other static
information with the other universities' qualifications are procedeed on hands
and eyes. Furthermore, some of qualifications are more detail than others, which
makes it difficult to comparing the numbers only.

When making an order of applicable universities in my preference, my relative
criterias are changed time to time. It delays the entire decision and often
affects other criterias. In addition, because of the ambiguity, the final order
is eventually decided in qualitative and relative manner.

The fact information of all universities are located in their own website, which
makes hard to collect in a single format and compare amone them. Opening web pages
and searching the requiring information also consumes time and is done
repeatedly.

## Existing Products

- [U.S. News Compare
    Colleges](https://www.usnews.com/best-colleges/compare?xwalk_id=145725&xwalk_id=166027)
  This webpage allows users to choose universities and compare them. Main
  targets are students who want to enter the universities in United States.
  There is the average alumni starting salary, acceptance rate and 4-year
  graduation rate, which is main concerns for applicants.
- [ISEP](https://www.isepstudyabroad.org)
  ISEP(International Student Exchange Program) is multi-lateral and global
  exchange student programs. Over 300 universities have been participating in
  this program and their students can have an opportunity to visit other member
  universities. Its program finder supports pinned map which can be used to look
  for applicable universities. There are region, country, field of study and
  language conditions as primary search filters. In addition, academic level,
  features and academic qualifications are available to apply filters. Specific
  information for each university deals with the city where the university is,
  and basic information about the university.
- [GE3](https://globale3.studioabroad.com)
  GE3(Global Engineering Education Exchange) program is an exchange program for
  undergraduate engineering students. There are over 20 countries and over 70
  universities participating in this program. Its website provides an advanced
  search tool which can filter the location (city, region, country and term), 
  disciplines, English courses and other conditions. There is also single sort
  options (program name, city, country and region). For each university, there
  are fast facts, short introduction, study level and English requirements. Most
  of academic information are provided through external links. The fact page
  includes housing and city information where the university is located.
- [QS](https://www.topuniversities.com/university-rankings)
  QS(Quacquarelli Symonds) provides world university rankings every years. There
  are various kinds of rankings, upon subject, graduate employability, best
  student cities, business masters and others. The overall ranking is determined
  through multiple criterias. There are region, location and subject conditions
  for filtering the universities. Detailed information for each university
  mainly refers to brief introduction and academic subjects. 

## Requirements Analysis

### Personal Information

The application should be able to keep the applicant's information. Regarding to
the eligibility of the programs, one's major, English qualifications and other
specific items should be noted first.

### University List

The application should be able to display all universities which exist in the
recruit sheet. Besides with the university's name, some basic information such
as region, country and others also should be shown. The user should be able to
manipulate multiple seraching and sorting conditions.

### University in Details

After clicking one of universities in the list, the user should be able to see
the detailed information about the university and its locations. The top of the
layout contains the related university's image if it exists. University's
homepage and its program's webpage also should be available. There is an
requirements section that contains minimum level of applicable students. Another
sections are about its courses, city and accomodation. The last section shows
how many and who have been the university from my origin. In addition, the
university's world ranking should be contained.

### Judgements and Ratings

In the details, the user should be able to make judgements whether I can apply
or not for each item. There should be a qualitative judgements like negative or
positive with ratings (like 1 to 5). The automatic determinations should be
provided if there is enough personal information with its corresponding
university's information. For items that consists of short paragraphs, those
should be able to make a rate and keep a comment.

### Ranking Wizard

In order to make a list of prefered universities, one's personal criterions
should be kept. All qualitative and quantitative items should be registered and
handled. Through the personal options above, the list of universities should be
able to generated with their scores.

## Development Environment

This application runs on ReactJS without any backend frameworks. Some static
resources might be delivered through another CDN servers. The layouts mainly
convern about mobile environment, not a desktop browser. Development and test
are done with MacBook Air (2020) and iPhone SE (2020). The guaranteed web
browser is only the latest version of Safari.

## Specifications

### Enter Personal Information

In the Profile tab, all fields will be set as default if there is nothing
modified before. If any field is changed, the 'cancel' and 'save' buttons will
appear on the layout. Followings are the items user can enter;

* College
* Department
* GPA (4.5, 4.3, 4.0 in maximum)
* English Qualifications (TOEFL IBT, IELTS, TOEFL ITP)
* Is taking a leave of absence

The user can define one's own criteria upon selecting the prefered universities.
It can be added 5 at most. Its name can be modified and dropped.

### University List

#### Load Data

The entire information is provided in JSON, which will be manipulated by the
client. When there is a update patch that is informed through HTTP API, the
cached file will be updated and related data is also manipulated properly.

#### Filters and Sort Conditions

For the begining, all universities are displayed and sorted with their unique
identifiers. On the main layout, there are 4 options at maximums and other
conditions will be shown after 'expand' button is pressed. When a condition is
newly applied or changed, its icon will appear on the new line. It will
disappear if a user click it. Followings are the items;

* Region
* Country (Name, Population, GDP, Territory)
* University Association (GE3, AACSB, EQUiS, n+i, ISEP)
* Size (Faculty, Student, Exchange Student)
* Applicable
* Favorites

#### Display Items

For each university in the list, its title and some specifications noted in
filters will be displayed. If the item area is clicked, user will see the
details of that university.

* Title
* Region
* Country
* Applicable
* Favorites

### University In Details

#### Summary

On the top of the layout, the university's images will appear if they exist.
Otherwise, the section will be replaced with an anonymous university icon.
University's title will be labeled with bold and larger text format. Other texts
are same with one in the list. There is editable note area, which can be
modified by the user. The 'Heart' icon is for Favorite label and the university
is registered when the icon is clicked.

#### Qualifications

Qualification section will have a green border if all requirements are
fulfilled. If there is any unfitted condition, it will have a red one. In other
case, the border's color is default. All qualification items have a current
status; either 'Fit', 'Unfit' or 'Unrated'. The editable area will appear when 
the user click. After an user changes any status, the entire status will be
updated if necessary. All specificaions have their fact basis which is provided
with external links or files appended with comment.

#### Details

Quantatitative statistics about the university will be displayed. Some of items
have additional labels like 'small', 'middle' and 'large'. In addition, the
average of all universities will be appended for some specifications. In regard
of the city and country, its basic information and global rankings will appear.
For each item, user can input one's subjective ratings, like 1 to 5. Besides of
them, the user's custom criteria can be modified.

#### External Links

On the bottom of the layout, related external links will be displayed. When the
user clicks one of them, the new page will be loaded in another tab or window.

* Recruit Information
* University's official web site
* Google Search result of the university
* Wikipedia of the university, city and country

### Automatic Ranking

If the user clicks the 'Setting' icon, the configuration pannel will appear.
There will be default settings. Most of search filters can be applied. There
are checkboxes whether the result list contains the unqualified ones or not.

The user can adjust the priorities of sorting criteria and assign their weights.
The total weights will be 10 at maximum. User can modify the list of criteria
and their weights. These weights will be transformed into ratio among the
overall criteria. For a classification, User can define the items' priority
in details, which is allocated in integer.

Through the user-defined criteria, the ranking of universities is automatically
calculated. The result page will show the total score and the ranked
universities' scores. In addition, their specific scores will be displayed
beisides of its overall one. The excluded universities won't appear.
