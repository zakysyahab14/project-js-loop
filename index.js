for(let i=0; i < 5; i++) {
    let a = String(i);
    let c = "";
    for(let b=0; b < i; b++) {
        c+=a;
    }
    console.log(c);
}

for(let i=0; i < 5; i++) {
    let a = String(i);
    let d = "          ";
    let c = "";
    for(b=0; b < i; b++) {
        c+=a;
    }
    console.log(d.slice(0,-i)+ c);
}

for(let i=0; i < 5; i++) {
    let a = String(i);
    let d = "          ";
    let c = "";
    for(b=0; b <     i; b++) {
        c+=a+a;
    }
    console.log(d.slice(0,-i)+ c);
}