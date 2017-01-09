const NoFi = (function(){

  var subscribed = false;
  var isOnline = navigator.onLine;
  var timer = 2 * 1000;
  var interval;

  var subscribe = function() {

	if (!subscribed) {

		return interval = setInterval(() => {

			isOnline = navigator.onLine;

			console.debug('Am I online?', isOnline);

			return isOnline;

        }, timer);
    }

    subscribed = true;
	return isOnline;
  };

  var unsubscribe = function() {
	clearInterval(interval);
    subscribed = false;
 	return subscribed;
  };


  return { isOnline, subscribe, unsubscribe };

})();

export default NoFi;
