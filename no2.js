const asalSantri = { "Sidik" : "Lampung", "Wandi" : "Prabumulih", "Rahmad" : "Medan", "Usamah" : "Ceribon", "Syofyan" : "Purwokerto", "Aldi" : "Kendari", "Kardi" : "Lombok" }

let {Sidik,Wandi,Rahmad,Usamah,...rest} = asalSantri;
console.log(Sidik,Wandi,Rahmad,Usamah,rest);