/*WebMap常用方法说明*/
//通用参数：Wkid：2364

//1.画点（方法可以自定义，核心方法flexFuncDrawPoint）
//参数传入的格式：
//var point =  "40549190.449,3372506.474"; //"Y坐标,X坐标"
//var wkid = well-known ID; //wkid这个是定义好的，在实际中，我们可以直接使用
//var pointJson = {
//    "Point": point,
//    "Wkid": wkid
//};

//案例说明：
var point = "40549190.449,3372506.474";//Y,X坐标
var wkid = 2364; 

var pointJson = {
    "Point": point,
    "Wkid": wkid
};

//画点
function DrawPoint() {
    //方法一：
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawPoint(pointJson);
    }
    catch (e) {
    }

    //方法二：
    document.getElementById("MyFlexApp").flexFuncDrawPoint(pointJson);
};

/*============================================================================================================*/

//2.画标注（方法可以自定义，核心方法flexFuncDrawPoint
//参数传入格式：
//var wkid = well-known ID; //wkid这个是定义好的，在实际中，我们可以直接使用
//var contentName = "测试"; //标注名称（一般可能是项目名称或是企业名称及地块名称等等）
//var pointArray = ["40548404.389", "3374087.772"];
//var showWindowValue = 0或者1; //0表示在地图的那一个窗体上描述标注，无叉（×），1表示另起一个窗体层，有叉（×），点击叉可以关闭这个标注
//var textTip = { "Wkid": wkid, "Content": contentName, "Corrd": pointArray, "ShowWindow": showWindowValue };

//案例说明：
var wkid = 2364; 
var contentName = "测试"; 
var pointArray = ["40548404.389", "3374087.772"];
var showWindowValue = 1; 

var textTip = { "Wkid": wkid, "Content": contentName, "Corrd": pointArray, "ShowWindow": showWindowValue };

//画注记
function DrawNote() {
    //方法一：
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawNote(textTip);
    }
    catch (e) {
    }

    //方法二：
    document.getElementById("MyFlexApp").flexFuncDrawNote(textTip);
}

/*============================================================================================================*/

//3.定位(方法可以自定义，核心方法flexFuncMapMoveto
//参数传入的格式：
//var point =  "40549190.449,3372506.474"; //"Y坐标,X坐标"
//var wkid = well-known ID; //wkid这个是定义好的，在实际中，我们可以直接使用
//var pointJson = {
//    "Point": point,
//    "Wkid": wkid
//};

//案例说明：
var point = "40549190.449,3372506.474";//坐标点Y,X
var wkid = 2364; //well-known ID这个是定义好的，在实际中，我们可以直接使用

var pointJson = {
    "Point": point,
    "Wkid": wkid
};

//定位
function MapMoveto() {
    //方法一：
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncMapMoveto(pointJson);
    }
    catch (e) {
    }

    //方法二：
    document.getElementById("MyFlexApp").flexFuncMapMoveto(pointJson);
}

/*============================================================================================================*/

//4.画面
//目前画面有2种方式，一种是根据XML去画，还有一种是根据坐标点构成的面去画
//4.1 利用XML去画面(方法可以自定义，核心方法flexFuncImportDK

var strXml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><configuration>  <DK>    <attrib>      <guid>2CD0DF94-E4C3-F71F-B8B8-13D1BC14AAA5</guid>      <state>1</state>      <zbx>54北京坐标系</zbx>      <fd>3</fd>      <tylx>高斯克吕格</tylx>      <jldw>米</jldw>      <dh>39</dh>      <jd>0.01</jd>      <zhcs>null</zhcs>    </attrib>    <coordinate>      <infor>54,0,null,新增地块,面,null,null,null,@</infor>      <points>        <point>J1,1,40548468.663,3370514.744</point>        <point>J2,1,40548482.151,3370477.183</point>        <point>J3,1,40548531.102,3370510.382</point>        <point>J4,1,40548474.154,3370408.119</point>        <point>J5,1,40548615.917,3370469.671</point>        <point>J6,1,40548539.099,3370420.720</point>        <point>J7,1,40548602.429,3370400.607</point>        <point>J8,1,40548409.777,3370336.874</point>        <point>J9,1,40548487.807,3370332.028</point>        <point>J10,1,40548420.924,3370287.924</point>        <point>J11,1,40548300.244,3370195.354</point>        <point>J12,1,40548388.210,3370209.409</point>        <point>J13,1,40548426.982,3370180.087</point>        <point>J14,1,40548436.918,3370170.394</point>        <point>J15,1,40548509.859,3370170.394</point>        <point>J16,1,40548485.868,3370242.608</point>        <point>J17,1,40548515.190,3370309.976</point>        <point>J18,1,40548593.463,3370406.907</point>        <point>J19,1,40548565.352,3370304.402</point>        <point>J20,1,40548619.149,3370275.080</point>        <point>J21,1,40548721.897,3370331.785</point>        <point>J22,1,40548950.171,3370336.632</point>        <point>J23,1,40548800.412,3370302.464</point>        <point>J24,1,40548941.690,3370283.077</point>        <point>J25,1,40548719.958,3370234.369</point>        <point>J26,1,40548913.822,3370195.354</point>        <point>J27,1,40548759.216,3370160.943</point>        <point>J28,1,40549041.045,3370180.087</point>        <point>J29,1,40548799.442,3370101.573</point>        <point>J30,1,40549003.484,3370096.484</point>        <point>J31,1,40548844.758,3370062.073</point>        <point>J32,1,40549029.413,3370003.187</point>        <point>J33,1,40548928.362,3370008.034</point>        <point>J34,1,40548967.377,3369935.335</point>        <point>J35,1,40548914.306,3369964.172</point>        <point>J36,1,40548904.613,3369910.375</point>        <point>J37,1,40548827.553,3369953.025</point>        <point>J38,1,40548842.819,3369860.213</point>        <point>J39,1,40548742.010,3369941.635</point>        <point>J40,1,40548641.201,3369878.145</point>        <point>J41,1,40548476.660,3369858.759</point>        <point>J42,1,40548521.006,3369984.285</point>        <point>J43,1,40548356.707,3369984.285</point>        <point>J44,1,40548391.118,3370046.806</point>        <point>J45,1,40548318.661,3370046.806</point>        <point>J46,1,40548343.379,3370099.634</point>        <point>J47,1,40548290.309,3370123.382</point>        <point>J48,1,40548329.324,3370167.001</point>        <point>J49,1,40548257.110,3370199.958</point>        <point>J50,1,40548243.055,3370262.722</point>        <point>J51,1,40548335.867,3370299.798</point>        <point>J52,1,40548361.069,3370409.815</point>        <point>J53,1,40548356.465,3370447.376</point>        <point>J54,1,40548468.663,3370514.744</point>      </points>    </coordinate>  </DK></configuration>";

function Ondkimport() {
    document.getElementById("MyFlexApp").flexFuncImportDK(strXml, true);
}


//4.2 利用坐标点组成的数组去画面(方法可以自定义，核心方法flexFuncDrawArea
/*
area是地块的JSON格式坐标
例：var areaJSON = { "Area": [[[39532111, 3512720], [39532111, 3480000], [39556315, 3497103], [39532111, 3512720]]], "Wkid": 2364 };
*/

var areaJSON = { "Area": [[[39532111, 3512720], [39532111, 3480000], [39556315, 3497103], [39532111, 3512720]]], "Wkid": 2364 };
function DrawArea() {
    //方法一：
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawArea(areaJSON);
    }
    catch (e) {
    }
    
    //方法二：
    document.getElementById("MyFlexApp").flexFuncDrawArea(areaJSON);
}

/*============================================================================================================*/

//5.图形层级
/*
level：为层级参数
*/

var level = 5;
function MapLevel(level) {
    //方法一：
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncMapLevel(level);
    }
    catch (e) {

    }
    
    //方法二：
    document.getElementById("MyFlexApp").flexFuncMapLevel(pointJson);
}

/*============================================================================================================*/

//6.画轨迹
/*例：route是轨迹点的JSON格式坐标
var routeJSON = { "Route": [[39524851, 3524481], [39524614, 3524050], [39524506, 3523662], [39525746, 3523565], [39525854, 3523748], [39526037, 3524082], [39525940, 3524535], [39524851, 3524481]] ,"Wkid":2364,"Time":1000}
*/
var routeJSON = { "Route": [[39524851, 3524481], [39524614, 3524050], [39524506, 3523662], [39525746, 3523565], [39525854, 3523748], [39526037, 3524082], [39525940, 3524535], [39524851, 3524481]], "Wkid": 2364, "Time": 1000 };

function DrawRoute() {
    //方法一：
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawRoute(routeJSON);
    }
    catch (e) {

    }

    //方法二：
    document.getElementById("MyFlexApp").flexFuncDrawRoute(routeJSON);
}

/*============================================================================================================*/

//7.画线
var lineJson = { "paths": [[[40548468.663, 3370514.744], [40548482.151, 3370477.183], [40548531.102, 3370510.382], [40548474.154, 3370408.119], [40548615.917, 3370469.671], [40548539.099, 3370420.720], [40548602.429, 3370400.607]]], "Wkid": 2364 };
            myFlexApp.flexFuncDrawLine(lineJson);
function DrawLine() {
    //方法一：
    var flexApp = document.getElementById(FlexMap.MapObjectID);
    try {
        flexApp.flexFuncDrawLine(lineJson);
    }
    catch (e) {

    }

    //方法二：
    document.getElementById("MyFlexApp").flexFuncDrawLine(pointJson);
}

/*============================================================================================================*/

// 8.显示窗体（比如我配置一个窗体“土地坐标”）
function OnShowwidget() {
    document.getElementById("MyFlexApp").flexFuncShowWidget("土地坐标");
}


/*============================================================================================================*/

//打开地图坐标页面，编辑地块坐标
var getStrXml, getObjThis;
function WindowOpenMapIndex(ths) {
    //获取绑定的XML
    //XML存放的对象名称
    var xmlId = getCtrlObj("p1_f2_r2_c7", ths);
    var saveXml = encodeURIComponent(xmlId.value);
    getStrXml = saveXml;
    getObjThis = ths;
    
    var strUrl = "../../../Platform/Extensions/WebMapCenter/TDGYMapIndex.htm";
    window.open(strUrl);
    
    //获取返回的XML
    //XML存放的对象名称
    var xmlId = getCtrlObj("p1_f2_r2_c7", ths);
    //给XML对象赋值
    var w = screen.width; //window.screen.width
    var h = screen.height; //window.screen.height
    var reValue = window.showModalDialog(strUrl, saveXml, "dialogWidth:" + w + ";dialogHeight:" + h + ";center:yes");
    if (reValue != null && reValue != undefined) {
        xmlId.value = reValue.value;
    }
}

function GetXml() {
    return getStrXml;
}

function GetThs() {
    return getObjThis;
}

var setStrXml, setObjThis;
function SetXml(saveStrXml,ths) {
    setStrXml = saveStrXml;
    setObjThis = ths;
}
