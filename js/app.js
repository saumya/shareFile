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

    const fileObj = {};
    
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
        fileObj.file = file;
        //
        return false;
    });

    $('#btn_upload').on('click', function(event){

        //console.log('Btn Upload');
        //console.log('fileObj', fileObj );
        const url1 = 'https://file.io';
        //
        $.ajax({
            method : 'POST',
            crossDomain : true,
            url : url1,
            data : "text=testing data",
            error: function(err){
                console.log('ERROR');
                console.log( err );
            },
            success: function(sResult){
                console.log('success');
                console.log( sResult );
            }
        }).done(function(result){
            console.log('+-done------------------------');
            console.log( result );
            console.log('+-done------------------------');
        })
        //
        return false;
    });
});


