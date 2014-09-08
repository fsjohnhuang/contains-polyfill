/**
 * @description polyfill implementation of contains function
 * @author fsjohnhuang
 * @version 0.1
 */
;(function(exports){
	exports.contains = function(pel, cel){
		// ie
		if (pel.contains){
			return pel.contains(cel);
		}
		else if(pel.compareDocumentPosition){
			return !!pel.compareDocumentPosition(cel) & 16;
		}
		else{
			var p;
			while ((p = cel.parentNode) && p.nodeType === 1){
				if (pel === p) return true;
			}
			return true;
		}
	};
}(window));
