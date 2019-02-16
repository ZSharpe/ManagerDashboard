// Document element selections
var metricsButton = document.querySelector("#mondayMetricsButton");
var closeMetricsButton = document.querySelector("#closeMetricsButton");
var metricsButton = document.querySelector("#thursdayMetricsButton");
var closeMetricsButton = document.querySelector("#closeMetricsButton");
var metricsButton = document.querySelector("#mondayMetricsButtonSecond");


// Document element event variables
var closeMetricsClick = closeMetricsButton.addEventListener("click", closeMondayMetricsStart);
var metricsClick = mondayMetricsButton.addEventListener("click", mondayMetricsStart);

function mondayMetricsStart(){
    var windowInstructions = window.open("https://myemma.atlassian.net/wiki/spaces/CustomerSupport/pages/665518081/Updating+the+weekly+supporter+digest+Weekly+CX+Update+numbers");
    var windowDeputy = window.open("https://2390fa18082540.na.deputy.com/#report");
    var windowSalesforce = window.open("https://na74.salesforce.com/00O1J000005qXny?cancelURL=%2F00O1J000005qXny");
    var windowTalkdesk = window.open("https://campaignmonitor.mytalkdesk.com/#monitoring/schedules/5b9bad188fd0250009ff4431/executions");
    var windowReportSheet = window.open("https://docs.google.com/spreadsheets/d/1tfMcQE9C-hOnw0YWYVwVCyoRtlfcGOcFEqllgk16mPk/edit?usp=drive_web&ouid=108962795010392363253");
    var windowCasesClosed = window.open("https://na74.salesforce.com/00O1J000005qXny?cancelURL=%2F00O1J000005qXny");

    windowInstructions.focus;

}

function mondayMetricsStartSecond() {

    var windowInstructions = window.open("https://myemma.atlassian.net/wiki/spaces/CustomerSupport/pages/665518081/Updating+the+weekly+supporter+digest+Weekly+CX+Update+numbers");
    var windowStaffingCalc = window.open("https://docs.google.com/spreadsheets/d/16SQoyuG6OZFXiys5yISt0IvNYRD3-eL8pE9Xp20Udkc/edit#gid=0");
    var windowSlide = window.open("https://docs.google.com/presentation/d/1N7urCk9qoW-8o2NdnUqAQMV-BBhOOMl-CCLg2td-U5g/edit#slide=id.g3d1b80a0d1_2_0");

    windowInstructions.focus;
}

function closeMondayMetricsStart(){

}

function thursdayMetricsStart(){
    var windowInstructions = window.open("https://myemma.atlassian.net/wiki/spaces/CustomerSupport/pages/665518081/Updating+the+weekly+supporter+digest+Weekly+CX+Update+numbers");
    var windowSlide = window.open("https://docs.google.com/presentation/d/1N7urCk9qoW-8o2NdnUqAQMV-BBhOOMl-CCLg2td-U5g/edit#slide=id.g3d1b80a0d1_2_0");
}