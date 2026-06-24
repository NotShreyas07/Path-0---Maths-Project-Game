gdjs.WhisperingForestCode = {};
gdjs.WhisperingForestCode.localVariables = [];
gdjs.WhisperingForestCode.idToCallbackMap = new Map();
gdjs.WhisperingForestCode.GDPlayerObjects1= [];
gdjs.WhisperingForestCode.GDPlayerObjects2= [];
gdjs.WhisperingForestCode.GDGrassObjects1= [];
gdjs.WhisperingForestCode.GDGrassObjects2= [];
gdjs.WhisperingForestCode.GDtree1Objects1= [];
gdjs.WhisperingForestCode.GDtree1Objects2= [];
gdjs.WhisperingForestCode.GDtree2Objects1= [];
gdjs.WhisperingForestCode.GDtree2Objects2= [];
gdjs.WhisperingForestCode.GDrockObjects1= [];
gdjs.WhisperingForestCode.GDrockObjects2= [];
gdjs.WhisperingForestCode.GDwizardObjects1= [];
gdjs.WhisperingForestCode.GDwizardObjects2= [];
gdjs.WhisperingForestCode.GDwizardspeaksObjects1= [];
gdjs.WhisperingForestCode.GDwizardspeaksObjects2= [];
gdjs.WhisperingForestCode.GDdialogueboxObjects1= [];
gdjs.WhisperingForestCode.GDdialogueboxObjects2= [];
gdjs.WhisperingForestCode.GDsignrightObjects1= [];
gdjs.WhisperingForestCode.GDsignrightObjects2= [];
gdjs.WhisperingForestCode.GDsignleftObjects1= [];
gdjs.WhisperingForestCode.GDsignleftObjects2= [];
gdjs.WhisperingForestCode.GDNewSpriteObjects1= [];
gdjs.WhisperingForestCode.GDNewSpriteObjects2= [];
gdjs.WhisperingForestCode.GDbridgeObjects1= [];
gdjs.WhisperingForestCode.GDbridgeObjects2= [];
gdjs.WhisperingForestCode.GDbridgebrokenObjects1= [];
gdjs.WhisperingForestCode.GDbridgebrokenObjects2= [];
gdjs.WhisperingForestCode.GDquestion1boardObjects1= [];
gdjs.WhisperingForestCode.GDquestion1boardObjects2= [];
gdjs.WhisperingForestCode.GDNewTextObjects1= [];
gdjs.WhisperingForestCode.GDNewTextObjects2= [];
gdjs.WhisperingForestCode.GDoptions1Objects1= [];
gdjs.WhisperingForestCode.GDoptions1Objects2= [];
gdjs.WhisperingForestCode.GDNewTextInputObjects1= [];
gdjs.WhisperingForestCode.GDNewTextInputObjects2= [];


gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WhisperingForestCode.GDPlayerObjects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree1Objects1Objects = Hashtable.newFrom({"tree1": gdjs.WhisperingForestCode.GDtree1Objects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree1Objects1Objects = Hashtable.newFrom({"tree1": gdjs.WhisperingForestCode.GDtree1Objects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WhisperingForestCode.GDPlayerObjects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree2Objects1Objects = Hashtable.newFrom({"tree2": gdjs.WhisperingForestCode.GDtree2Objects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree2Objects1Objects = Hashtable.newFrom({"tree2": gdjs.WhisperingForestCode.GDtree2Objects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WhisperingForestCode.GDPlayerObjects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.WhisperingForestCode.GDrockObjects1});
gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDrockObjects1Objects = Hashtable.newFrom({"rock": gdjs.WhisperingForestCode.GDrockObjects1});
gdjs.WhisperingForestCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.WhisperingForestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("tree1"), gdjs.WhisperingForestCode.GDtree1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDPlayerObjects1Objects, gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.WhisperingForestCode.GDPlayerObjects1 */
/* Reuse gdjs.WhisperingForestCode.GDtree1Objects1 */
{for(var i = 0, len = gdjs.WhisperingForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WhisperingForestCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree1Objects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.WhisperingForestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("tree2"), gdjs.WhisperingForestCode.GDtree2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDPlayerObjects1Objects, gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.WhisperingForestCode.GDPlayerObjects1 */
/* Reuse gdjs.WhisperingForestCode.GDtree2Objects1 */
{for(var i = 0, len = gdjs.WhisperingForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WhisperingForestCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDtree2Objects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.WhisperingForestCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.WhisperingForestCode.GDPlayerObjects1.length !== 0 ? gdjs.WhisperingForestCode.GDPlayerObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.WhisperingForestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.WhisperingForestCode.GDrockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDPlayerObjects1Objects, gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDrockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.WhisperingForestCode.GDPlayerObjects1 */
/* Reuse gdjs.WhisperingForestCode.GDrockObjects1 */
{for(var i = 0, len = gdjs.WhisperingForestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WhisperingForestCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.WhisperingForestCode.mapOfGDgdjs_9546WhisperingForestCode_9546GDrockObjects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("dialoguebox"), gdjs.WhisperingForestCode.GDdialogueboxObjects1);
{for(var i = 0, len = gdjs.WhisperingForestCode.GDdialogueboxObjects1.length ;i < len;++i) {
    gdjs.WhisperingForestCode.GDdialogueboxObjects1[i].setLayer("ui layer");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("wizardspeaks"), gdjs.WhisperingForestCode.GDwizardspeaksObjects1);
{for(var i = 0, len = gdjs.WhisperingForestCode.GDwizardspeaksObjects1.length ;i < len;++i) {
    gdjs.WhisperingForestCode.GDwizardspeaksObjects1[i].setLayer("ui layer");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ("" == "b");
}
if (isConditionTrue_0) {
}

}


};

gdjs.WhisperingForestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WhisperingForestCode.GDPlayerObjects1.length = 0;
gdjs.WhisperingForestCode.GDPlayerObjects2.length = 0;
gdjs.WhisperingForestCode.GDGrassObjects1.length = 0;
gdjs.WhisperingForestCode.GDGrassObjects2.length = 0;
gdjs.WhisperingForestCode.GDtree1Objects1.length = 0;
gdjs.WhisperingForestCode.GDtree1Objects2.length = 0;
gdjs.WhisperingForestCode.GDtree2Objects1.length = 0;
gdjs.WhisperingForestCode.GDtree2Objects2.length = 0;
gdjs.WhisperingForestCode.GDrockObjects1.length = 0;
gdjs.WhisperingForestCode.GDrockObjects2.length = 0;
gdjs.WhisperingForestCode.GDwizardObjects1.length = 0;
gdjs.WhisperingForestCode.GDwizardObjects2.length = 0;
gdjs.WhisperingForestCode.GDwizardspeaksObjects1.length = 0;
gdjs.WhisperingForestCode.GDwizardspeaksObjects2.length = 0;
gdjs.WhisperingForestCode.GDdialogueboxObjects1.length = 0;
gdjs.WhisperingForestCode.GDdialogueboxObjects2.length = 0;
gdjs.WhisperingForestCode.GDsignrightObjects1.length = 0;
gdjs.WhisperingForestCode.GDsignrightObjects2.length = 0;
gdjs.WhisperingForestCode.GDsignleftObjects1.length = 0;
gdjs.WhisperingForestCode.GDsignleftObjects2.length = 0;
gdjs.WhisperingForestCode.GDNewSpriteObjects1.length = 0;
gdjs.WhisperingForestCode.GDNewSpriteObjects2.length = 0;
gdjs.WhisperingForestCode.GDbridgeObjects1.length = 0;
gdjs.WhisperingForestCode.GDbridgeObjects2.length = 0;
gdjs.WhisperingForestCode.GDbridgebrokenObjects1.length = 0;
gdjs.WhisperingForestCode.GDbridgebrokenObjects2.length = 0;
gdjs.WhisperingForestCode.GDquestion1boardObjects1.length = 0;
gdjs.WhisperingForestCode.GDquestion1boardObjects2.length = 0;
gdjs.WhisperingForestCode.GDNewTextObjects1.length = 0;
gdjs.WhisperingForestCode.GDNewTextObjects2.length = 0;
gdjs.WhisperingForestCode.GDoptions1Objects1.length = 0;
gdjs.WhisperingForestCode.GDoptions1Objects2.length = 0;
gdjs.WhisperingForestCode.GDNewTextInputObjects1.length = 0;
gdjs.WhisperingForestCode.GDNewTextInputObjects2.length = 0;

gdjs.WhisperingForestCode.eventsList0(runtimeScene);
gdjs.WhisperingForestCode.GDPlayerObjects1.length = 0;
gdjs.WhisperingForestCode.GDPlayerObjects2.length = 0;
gdjs.WhisperingForestCode.GDGrassObjects1.length = 0;
gdjs.WhisperingForestCode.GDGrassObjects2.length = 0;
gdjs.WhisperingForestCode.GDtree1Objects1.length = 0;
gdjs.WhisperingForestCode.GDtree1Objects2.length = 0;
gdjs.WhisperingForestCode.GDtree2Objects1.length = 0;
gdjs.WhisperingForestCode.GDtree2Objects2.length = 0;
gdjs.WhisperingForestCode.GDrockObjects1.length = 0;
gdjs.WhisperingForestCode.GDrockObjects2.length = 0;
gdjs.WhisperingForestCode.GDwizardObjects1.length = 0;
gdjs.WhisperingForestCode.GDwizardObjects2.length = 0;
gdjs.WhisperingForestCode.GDwizardspeaksObjects1.length = 0;
gdjs.WhisperingForestCode.GDwizardspeaksObjects2.length = 0;
gdjs.WhisperingForestCode.GDdialogueboxObjects1.length = 0;
gdjs.WhisperingForestCode.GDdialogueboxObjects2.length = 0;
gdjs.WhisperingForestCode.GDsignrightObjects1.length = 0;
gdjs.WhisperingForestCode.GDsignrightObjects2.length = 0;
gdjs.WhisperingForestCode.GDsignleftObjects1.length = 0;
gdjs.WhisperingForestCode.GDsignleftObjects2.length = 0;
gdjs.WhisperingForestCode.GDNewSpriteObjects1.length = 0;
gdjs.WhisperingForestCode.GDNewSpriteObjects2.length = 0;
gdjs.WhisperingForestCode.GDbridgeObjects1.length = 0;
gdjs.WhisperingForestCode.GDbridgeObjects2.length = 0;
gdjs.WhisperingForestCode.GDbridgebrokenObjects1.length = 0;
gdjs.WhisperingForestCode.GDbridgebrokenObjects2.length = 0;
gdjs.WhisperingForestCode.GDquestion1boardObjects1.length = 0;
gdjs.WhisperingForestCode.GDquestion1boardObjects2.length = 0;
gdjs.WhisperingForestCode.GDNewTextObjects1.length = 0;
gdjs.WhisperingForestCode.GDNewTextObjects2.length = 0;
gdjs.WhisperingForestCode.GDoptions1Objects1.length = 0;
gdjs.WhisperingForestCode.GDoptions1Objects2.length = 0;
gdjs.WhisperingForestCode.GDNewTextInputObjects1.length = 0;
gdjs.WhisperingForestCode.GDNewTextInputObjects2.length = 0;


return;

}

gdjs['WhisperingForestCode'] = gdjs.WhisperingForestCode;
