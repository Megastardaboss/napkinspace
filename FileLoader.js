function previewFile(){
                    var preview = document.querySelector('img'); //selects the query named img
                    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
                    var reader  = new FileReader();

                       reader.onloadend = function () {
                            preview.src = reader.result;
                            var canvas = document.getElementById('canvas');
                            var context = canvas.getContext("2d");
                            var useImage = document.getElementById('sourceImage');
                            context.drawImage(useImage,100,100);
                       }

                       if (file) {
                           reader.readAsDataURL(file); //reads the data as a URL
                       } else {
                           preview.src = "";
                       }

                    }

previewFile();  //calls the function named previewFile()