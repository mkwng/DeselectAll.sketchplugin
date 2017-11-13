function onRun(context) {

    var sketch = context.api();
    var document = sketch.selectedDocument;
    var selection = document.selectedLayers;

    selection.clear();
    sketch.message("Deselected all layers");
    
};
