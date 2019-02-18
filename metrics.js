// Document element selections
var mondayMetricsButton = document.querySelector("#mondayMetricsButton");
var mondayMetricsButtonSecond = document.querySelector("#mondayMetricsButtonSecond");
var thursdayMetricsButton = document.querySelector("#thursdayMetricsButton");

// Document element event variables
var metricsClickMonday = mondayMetricsButton.addEventListener("click", mondayMetricsStart);
var metricsClickMondaySecond = mondayMetricsButtonSecond.addEventListener("click", mondayMetricsStartSecond);
var metricsClickThursday = thursdayMetricsButton.addEventListener("click", thursdayMetricsStart);

// Open tabs for the first half of Monday reporting (supporter weekly metrics).
function mondayMetricsStart(){
    var windowInstructions = window.open("https://myemma.atlassian.net/wiki/spaces/CustomerSupport/pages/665518081/Updating+the+weekly+supporter+digest+Weekly+CX+Update+numbers");
    var windowDeputy = window.open("https://2390fa18082540.na.deputy.com/#report");
    var windowSalesforce = window.open("https://na74.salesforce.com/00O1J000005qXny?cancelURL=%2F00O1J000005qXny");
    var windowTalkdesk = window.open("https://campaignmonitor.mytalkdesk.com/#monitoring/schedules/5b9bad188fd0250009ff4431/executions");
    var windowReportSheet = window.open("https://docs.google.com/spreadsheets/d/1tfMcQE9C-hOnw0YWYVwVCyoRtlfcGOcFEqllgk16mPk/edit?usp=drive_web&ouid=108962795010392363253");
    windowInstructions.focus;
}

// Open tabs for the second half of Monday reporting (slide updates).
function mondayMetricsStartSecond() {

    var windowInstructions = window.open("https://myemma.atlassian.net/wiki/spaces/CustomerSupport/pages/665518081/Updating+the+weekly+supporter+digest+Weekly+CX+Update+numbers");
    var windowStaffingCalc = window.open("https://docs.google.com/spreadsheets/d/16SQoyuG6OZFXiys5yISt0IvNYRD3-eL8pE9Xp20Udkc/edit#gid=0");
    var windowSlide = window.open("https://docs.google.com/presentation/d/1N7urCk9qoW-8o2NdnUqAQMV-BBhOOMl-CCLg2td-U5g/edit#slide=id.g4e9506b5ca_0_0");
    var windowDeputy = window.open("https://2390fa18082540.na.deputy.com/#roster");
    var windowCasesClosed = window.open("https://campaignmonitor.my.salesforce.com/console");
    windowInstructions.focus;
}

// Open tabs for Thursday slide updates.
function thursdayMetricsStart(){
    var windowInstructions = window.open("https://myemma.atlassian.net/wiki/spaces/CustomerSupport/pages/665518081/Updating+the+weekly+supporter+digest+Weekly+CX+Update+numbers");
    var windowSlide = window.open("https://docs.google.com/presentation/d/1N7urCk9qoW-8o2NdnUqAQMV-BBhOOMl-CCLg2td-U5g/edit#slide=id.g3d1b80a0d1_2_0");
}