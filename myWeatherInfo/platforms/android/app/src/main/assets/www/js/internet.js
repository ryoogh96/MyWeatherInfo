

			var connectionStatus = false;

			$(document).on('pagebeforeshow', '#index', function () {
				setInterval(function () {
					connectionStatus = navigator.onLine ? 'online' : 'offline';
				}, 100);
				$(document).on('click', '#check-connection', function () {
					alert(connectionStatus);
				});
			});	