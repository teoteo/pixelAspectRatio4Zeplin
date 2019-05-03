function zeplinObserve() {
/*
	var pixePithH = 0.1926;
	var pixePithV = 0.1790;
*/
	var pixelAspectRatio = pixePithV/pixePithH;
    var targetNode = document.querySelector('main');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };


// Callback function to execute when mutations are observed
var callback = function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.type == 'childList' && mutation.addedNodes.length > 0) {

            //console.log('A child node has been added or removed.');
//console.log(mutation.addedNodes[0]);
let added = mutation.addedNodes[0];
if (added.className == 'layerWidth') {

           let ww = '<div style="white-space: nowrap; margin-bottom: 10px;"><span style="font-weight: 500;">' + Math.round((parseInt(added.innerHTML.replace('px',''), 10) * pixelAspectRatio)) + '</span>px' + '<span style="font-size: 10px; color: #888;">('+added.innerHTML+')</span></div>';
//     console.log('pixelAspectRatio: ' + pixelAspectRatio);

           added.innerHTML = ww;
} else if (added.className=='distances'){
    //console.log(added.className);
    
    added.querySelectorAll('.distance.horizontal').forEach(function(disOrEl){
    disOrEl.querySelectorAll('.value').forEach(function(valEl){

    let newWW = '<span style="font-weight: 500;">' + Math.round((parseInt(valEl.innerHTML.replace('px',''), 10) * pixelAspectRatio)) + '</span>px<span style="font-size: 10px; color: #888;">' + '('+valEl.innerHTML+')</span>';

    valEl.innerHTML = newWW;
    });
    });
    
    
}
        }
        else if (mutation.type == 'attributes') {
            //console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
}

zeplinObserve();

function zeplinZIndexFix() {
	
	//	Put component label behind measure label
	const componentLabel = document.querySelector('.componentLayer a');
	componentLabel.setAttribute('style', 'z-index: auto');
}

zeplinZIndexFix();