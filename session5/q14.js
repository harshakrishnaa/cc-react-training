let promise = new Promise((res,rej) => {
    setTimeout(() => res("Resolved!"),3000)
} );
Let result = await promise; 
alert(result);

