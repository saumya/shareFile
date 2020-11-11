//
console.group('Entry');
console.log('app');
console.log('trying');
console.groupEnd();
//
$(function(){
    console.log('Ready!');
    //console.log( $('#in_File')[0] );
    //console.log( $('#btn_upload')[0] );
    
    $('#in_File').on('change', function(event){
        //console.log( 'change', new Date() );
        //console.log(event.target);
        
        /*
        const name = event.target.files[0].name;
        const lastDot = name.lastIndexOf('.');
        const fileName = name.substring(0, lastDot);
        const ext = name.substring(lastDot + 1);

        console.log('name', fileName);
        console.log('extension', ext);
        */
        //
        //const reader = new FileReader();
        //console.log( 'reader', reader );

        const file = event.target.files[0];
        /*
        console.log( 'file', file );
        console.log( 'name', file.name );
        console.log( 'size', file.size );
        console.log( 'type', file.type );
        */
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            //img.src = event.target.result;
            $('#img_file')[0].src = event.target.result;
            //$('#img_file').src = event.target.result;
        });
        reader.addEventListener('progress', (event) => {
            if (event.loaded && event.total) {
              const percent = (event.loaded / event.total) * 100;
              console.log(`Progress: ${Math.round(percent)}`);
            }
        });
        reader.readAsDataURL(file);

        //
        return false;
    });
});


