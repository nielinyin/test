function FlexMap() {
};

FlexMap.MapObjectID = "MyFlexApp";
//FlexMap.ConfigServiceUrl = "http://192.168.1.253/WgsWebApp/XmlWebSer.asmx?wsdl";

/*画点
  point是点的JSON格式坐标
  例：var pointJSON = { "Point": "39532111,3512720", "Wkid": 2384 };
*/
FlexMap.DrawPoint = function (point) {
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawPoint(point);
    }
    catch (e) {

    }
}

FlexMap.DrawLine = function (lineArray) {
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawLine(lineArray);
    }
    catch (e) {

    }
}
/*画轨迹
  route是轨迹点的JSON格式坐标
  例：var routeJSON = { "Route": [[39524851, 3524481], [39524614, 3524050], [39524506, 3523662], [39525746, 3523565], [39525854, 3523748], [39526037, 3524082], [39525940, 3524535], [39524851, 3524481]] ,"Wkid":2384,"Time":1000}
*/
FlexMap.DrawRoute = function (route) {
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawRoute(route);
    }
    catch (e) {

    }
}
/*画地块
  area是地块的JSON格式坐标
  例：var areaJSON = { "Area": [[[39532111, 3512720], [39532111, 3480000], [39556315, 3497103], [39532111, 3512720]]], "Wkid": 2384 };
*/
FlexMap.DrawArea = function (area) {
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawArea(area);
    }
    catch (e) {

    }
}

FlexMap.DrawNote = function (noteString) {
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawNote(noteString);
    }
    catch (e) {

    }
}

/*
   图形层级
   level：为层级参数
*/
FlexMap.MapLevel = function (level) {
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncMapLevel(level);
    }
    catch (e) {

    }
}

/*
   var point="39520578.3947672,3522699.7363391";
   var wkid="2363";
   var json={"Point":point,"Wkid":wkid};

*/
FlexMap.MapMoveto = function (json) {
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncMapMoveto(json);
    }
    catch (e) {

    }
}