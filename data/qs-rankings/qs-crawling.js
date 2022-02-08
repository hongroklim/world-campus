// Get current page number
getPagenum = () => {
    num = document.querySelector("#alt-style-pagination > li.active").textContent
    return Number.parseInt(num.trim())
}

// Assign items
assignRank = (output, page)=> output[page]['rank'] = Array.prototype.slice.call(document.querySelectorAll("#ranking-data-load_ind > div > div > div > div > div.col-lg-5._right_background > div > div > div > div > div.col-lg-3.text-center.hide-this-in-mobile-indi > div")).map(e => e.textContent.trim())
assignUniv = (output, page) => output[page]['univ'] = Array.prototype.slice.call(document.querySelectorAll("#ranking-data-load_ind > div > div > div > div > div.col-lg-5._right_background > div > div > div > div > div.col-lg-9.no-padding-indicator-left.hide-this-in-mobile-indi > div > div.td-wrap > div > a")).map(e => e.textContent.trim())
assignLoc = (output, page) => output[page]['loc'] = Array.prototype.slice.call(document.querySelectorAll("#ranking-data-load_ind > div > div > div > div > div.col-lg-5._right_background > div > div > div > div > div.col-lg-9.no-padding-indicator-left.hide-this-in-mobile-indi > div > div.location")).map(e => e.textContent.trim())

// Get a single column of scores
getScr = (num) => Array.prototype.slice.call(document.querySelectorAll(`#ranking-data-load_ind > div > div > div > div > div.col-lg-7.no-left-margin-padding > div > div > div > div:nth-child(${num}) > div > div > span > div > div`)).map(e => e.textContent.trim())

// Get all columns of scores
assignScrs = (output, page) => {
    scrNum = document.querySelectorAll("#move-all-js > div._smallblocksfix-width._mt_not_scrollbar.sort_by_university.asc.cusrsor_pointer > div > div").length
    for(i=1; i<=scrNum; i++)
        output[page][`scr${i}`] = getScr(i)
}

// Get specified data
assignItems = (output, page) => {
    assignRank(output, page)
    assignUniv(output, page)
    assignLoc(output, page)
    assignScrs(output, page)
}

// Recursively crawling the entire data
crawlPage = (output) => {
    page = getPagenum()

    if(!output.hasOwnProperty(page)){
        output[page] = {}
        assignItems(output, page)
    }

    nextBtns = document.querySelectorAll("#alt-style-pagination > li > a.next")

    if(nextBtns.length > 0)
        nextBtns[0].click()
}

// Initialize the variable then crawl
allData = {}

// Repeat for each execution
crawlPage(allData)

// Print the result
JSON.stringify(allData)
