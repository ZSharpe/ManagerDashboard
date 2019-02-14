// Document element selections
var metricsButton = document.querySelector("#mondayMetricsButton");
var closeMetricsButton = document.querySelector("#closeMetricsButton");
var metricsButton = document.querySelector("#thursdayMetricsButton");
var closeMetricsButton = document.querySelector("#closeMetricsButton");

// Document element event variables
var closeMetricsClick = closeMetricsButton.addEventListener("click", closeMondayMetricsStart);
var metricsClick = metricsButton.addEventListener("click", mondayMetricsStart);

function mondayMetricsStart(){
    var windowInstructions = window.open("https://myemma.atlassian.net/wiki/spaces/CustomerSupport/pages/665518081/Updating+the+weekly+supporter+digest+Weekly+CX+Update+numbers");
    var windowDeputy = window.open("https://2390fa18082540.na.deputy.com/#report");
    var windowSalesforce = window.open("https://na74.salesforce.com/00O1J000005qXny?cancelURL=%2F00O1J000005qXny");
    var windowTalkdesk = window.open("https://campaignmonitor.mytalkdesk.com/#monitoring/schedules/5b9bad188fd0250009ff4431/executions");
    var windowReportSheet = window.open("https://docs.google.com/spreadsheets/d/1tfMcQE9C-hOnw0YWYVwVCyoRtlfcGOcFEqllgk16mPk/edit?usp=drive_web&ouid=108962795010392363253");
}

function closeMondayMetricsStart(){
    windowInstructions.close;
    windowDeputy.close;
    windowSalesforce.close
    windowTalkdesk.close;
    windowReportSheet.close;
}

