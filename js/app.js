//
console.group('Entry');
console.log('app');
console.log('trying');
console.groupEnd();
//
$(function(){
    console.log('Ready!');
    console.log( $('#in_File')[0] );
    console.log( $('#btn_upload')[0] );
    
    $('#in_File').on('change', function(event){
        console.log( 'change', new Date() );
        console.log(event.target);
        
        const name = event.target.files[0].name;
        const lastDot = name.lastIndexOf('.');
        const fileName = name.substring(0, lastDot);
        const ext = name.substring(lastDot + 1);

        console.log(fileName);
        console.log(ext);

        return false;
    });
});


