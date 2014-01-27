/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    initialize: function() {
        this.bindEvents();
    },
   
    bindEvents: function() {
        var takePhoto = document.getElementById('takePhoto');
        takePhoto.addEventListener('click', app.takePhoto, false);
        var sendPhoto = document.getElementById('sendPhoto');
        sendPhoto.addEventListener('click', app.sendPhoto, false);
    },

    sendPhoto: function() {
        var photo = document.getElementById('photo');
        window.plugins.emailComposer.showEmailComposerWithCallback(app.sendPhotoCB,
            "Solicitud de análisis de firma",
            "<p>Solicito que se analice mi firma.</p> <p>Muchas gracias.</p>",
            ["diezperezcarmen@gmail.com"],[],[],true,[],[['firma.jpg', photo.getAttribute('data-content-base64')]]);
    },

    sendPhotoCB: function(code) {
        var photo = document.getElementById('photo');
        photo.style.display='none';
        var sendPhoto = document.getElementById('sendPhoto');
        sendPhoto.style.display = 'none';
        if (code === 2){
            $().toastmessage('showSuccessToast', 'Tu solicitud se ha enviado correctamente');
        }else{
            if (code != 10){
                $().toastmessage('showWarningToast', 'Tu solicitud no se ha enviado');
            }
        }
    },

    takePhoto: function(){
        navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
            allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });
    },

    onPhotoDataSuccess: function(imageData) {
   
      var photo = document.getElementById('photo');

      photo.style.display = 'block';

      photo.src = "data:image/jpeg;base64," + imageData;

      photo.setAttribute('data-content-base64', imageData);

      var sendPhoto = document.getElementById('sendPhoto');
      sendPhoto.style.display = 'block';

    },

    onFail: function(message) {
      console.log('Failed because: ' + message);
    }

};
