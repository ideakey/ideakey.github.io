function removeCache()
{
d0cument.DSWC_IEG.DeleteCache();
setTimeout("removeCache()", 20000);
}

function disableselect(e)
{
return false;
}

function reEnable()
{
return true;
}

if (navigator.appName != "Netscape")
{
d0cument.onselectstart=new Function ("return false");
d0cument.oncontextmenu=new Function ("return false");
d0cument.ondragstart=new Function ("return false");
}
else
{
if (window.sidebar)
{
d0cument.onmousedown=disableselect;
d0cument.onclick=reEnable;
}
}

function StartGuard(right)
{
if (navigator.appName != "Netscape")
{
var nav;

nav = window.navigator.userAgent;

//alert(nav);

// NT 3,4 일경우 그냥 통과
if ((nav.indexOf("NT)") >= 0) || (nav.indexOf("NT 4") >= 0) ||
(nav.indexOf("NT 3") >= 0))
{
return;
}
if (typeof(d0cument.DSWC_IEG.ErrMsg) != "undefined")
{
d0cument.DSWC_IEG.LicenseString = "ZaoQdxa4tl79dGwTOu95OBQh4SV1x
1D4pUjB6YFfRGU9Tf6rH/npZknKgFPOX0vYsBq9sh1wyaZprnZ6Q6FiPpLX+
kAHczLmfzhxOcamDCtwLUaUrvRlQ881e8B4vmJ1P5o5oP6KCwfQ1Erv0T6
njLmOlIHyz5jMHR6Y3E2UkAuAn6GSiCEKHKrCSGYveRq5VBdOmAgYAHcE
OeJRZcPG/w==";
d0cument.DSWC_IEG.Start(right);
d0cument.DSWC_CP.ClearList();
d0cument.DSWC_CP.AddList("","IrfanView","i_view32");
d0cument.DSWC_CP.AddList("SnagIt","SnagIt5UI","");
d0cument.DSWC_CP.AddList("Configure Screenshot Utility","TConfigForm","");
d0cument.DSWC_CP.AddList("ScreenGet","#32770","");
d0cument.DSWC_CP.AddList("Mr. Captor","MrCaptorClass","");
d0cument.DSWC_CP.AddList("Capturex","TMainfrm","");
d0cument.DSWC_CP.AddList("Capture Professional v5","CSWORX-CP5","");
d0cument.DSWC_CP.AddList("ScreenSharePro","TScreenShareDlg","");
d0cument.DSWC_CP.AddList("ScreenSharePro","TEditCenterDlg","");
d0cument.DSWC_CP.AddList("Easy Screen Capture 1.22","TfrmMain","");
d0cument.DSWC_CP.AddList("HardCopy Pro","#32770","");
d0cument.DSWC_CP.AddList("CaptureEze Pro - What would you like to do?","CzeProFrameCls","");
d0cument.DSWC_CP.AddList("20/20 v2.2","TMainForm","");
d0cument.DSWC_CP.AddList("SD Capture","#32770","");
d0cument.DSWC_CP.AddList("HotShot","TfrmHotShot","");
d0cument.DSWC_CP.AddList("Grabbit 2","#32770","");
d0cument.DSWC_CP.AddList("ClipMate [Short-Term]","TfrmCM","");

d0cument.DSWC_CP.StartAction();
removeCache();
}
}
}

function ObjectWrite()
{
var nav;

nav = window.navigator.userAgent;

// NT 3,4 일경우 그냥 통과
if ((nav.indexOf("NT)") >= 0) || (nav.indexOf("NT 4") >= 0) || (nav.indexOf("NT 3") >= 0))
{
return;
}

d0cument.write("" height=0 width=0 classid=CLSID:196300A5-09A2-4C9D-9B67-3A1F5168A025 name=DSWC_IEG>" +
" " +
"" height=0 width=0 classid=CLSID:25A4A1F7-309C-4C0E-9603-4C885EC05E84 name=DSWC_CP>" +
" ");
}
