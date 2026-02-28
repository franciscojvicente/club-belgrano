const qrScanner = new Html5Qrcode('reader');

qrScanner
	.start({ facingMode: 'environment' }, { fps: 10, qrbox: 250 }, async (decodedText) => {
		try {
			const res = await fetch('https://script.google.com/macros/s/AKfycbx1x_-_gYFutasVZW_9DKQSMvdQVx3nYOwLSd1lmWr0RNaVzvl9K5tEoA07xA_nTESc7w/exec', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ qr: decodedText }),
			});
			const data = await res.json();
			alert('Resultado: ' + data.message);
		} catch (e) {
			alert('Error validando QR: ' + e);
		}
	})
	.catch((err) => alert('Error cámara: ' + err));
