function generateQR() {
  try {
    const ssid = document.getElementById('ssid').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const size = parseInt(document.getElementById('size').value);

    if (!ssid) {
      alert('Por favor, ingresa el SSID.');
      return;
    }

    const wifiInfo = `SSID: ${encodeURIComponent(ssid)}\nUsuario: ${encodeURIComponent(username)}\nContraseña: ${encodeURIComponent(password)}`;
    console.log('Información del Wi-Fi:', wifiInfo); // Depuración
    console.log('Tamaño seleccionado:', size); // Depuración

    // Limpiar QR anterior
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';

    // Generar el nuevo QR
    QRCode.toCanvas(qrContainer, wifiInfo, { width: size }, function (error) {
      if (error) {
        console.error('Error al generar el QR:', error); // Depuración
        alert('Ocurrió un error al generar el código QR.');
      } else {
        console.log('QR generado con éxito');
      }
    });
  } catch (error) {
    console.error('Error en generateQR:', error); // Depuración
    alert('Ocurrió un error inesperado.');
  }
}
