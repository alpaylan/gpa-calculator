function loadJSON(filename, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', filename, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
 }

//exports.get_dept = function (dept) {
//  loadJSON("user.ceng.metu.edu.tr/~e2310456/gpa-calculator/conf/" + dept + ".json", function (response) {
//    return JSON.parse(response);
//  })
//};

//function get_depts () {
//  loadJSON("http://user.ceng.metu.edu.tr/~e2310456/gpa-calculator/conf/depts.json", function (response) {
//    return JSON.parse(response);
//  })
//};
//
//function get_courses () {
//  loadJSON("http://user.ceng.metu.edu.tr/~e2310456/gpa-calculator/conf/courses.json", function (response) {
//    return JSON.parse(response);
//  })
//};
