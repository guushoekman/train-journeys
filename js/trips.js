var denHaagToAdamZuid = [
	[127, 308],
	[131, 310],
	[141, 303],
	[153, 289],
	[152, 283],
	[160, 279],
	[164, 279],
	[177, 266],
	[182, 265],
	[193, 256],
	[200, 255],
]

var adamZuidToDenHaag = [
	[200, 255],
	[193, 256],
	[182, 265],
	[177, 266],
	[164, 279],
	[160, 279],
	[152, 283],
	[153, 289],
	[141, 303],
	[131, 310],
	[127, 308],
]

var delftToDenHaag = [
	[133, 329],
	[128, 318],
	[128, 312],
	[131, 310],
  [128, 307],
]

var denHaagToDelft = [
  [128, 307],
	[131, 310],
	[128, 312],
	[128, 318],
	[133, 329],
]

var denHaagToAmersfoort = [
	[128, 308],
	[135, 312],
	[140, 314],
	[151, 315],
	[159, 320],
	[172, 324],
	[179, 323],
	[186, 323],
	[191, 321],
	[199, 314],
	[200, 310],
	[205, 307],
	[212, 305],
	[224, 305],
	[230, 306],
	[232, 309],
	[230, 305],
	[233, 303],
	[251, 296],
	[257, 297],
	[260, 296],
	[262, 295],
]

var amersfoortToWageningen = [
	[262, 295],     
	[265, 294],
	[270, 290],
	[282, 293],
	[294, 293],
	[294, 294],
	[293, 296],
	[293, 297],
	[295, 299],
	[298, 304],
	[298, 305],
	[297, 307],
	[298, 308],
	[303, 314],
	[304, 315],
	[303, 316],
	[303, 317],
	[303, 318],
]

var wageningenToDenHaag = [        
	[303, 318],
	[303, 320],
	[288, 316],
	[269, 315],
	[263, 313],
	[249, 313],
	[243, 314],
	[232, 309],
	[230, 306],
	[224, 305],
	[211, 305],
	[204, 308],
	[200, 311],
	[198, 314],
	[191, 321],
	[186, 323],
	[179, 323],
	[172, 325],
	[159, 320],
	[150, 315],
	[141, 315],
	[135, 313],
	[128, 308],
]

var trip = [
	{ 
	  "route": denHaagToAdamZuid,
	  "date": "2015-03-27",
	  "from": "Den Haag Centraal",
	  "to": "Amsterdam Zuid",
	  "cost": 5.90
	},
	{ 
	  "route": delftToDenHaag,
	  "date": "2015-03-30",
	  "from": "Delft",
	  "to": "Den Haag Centraal", 
	  "cost": 1.4
	},
	{
		"route": denHaagToAmersfoort,
		"date": "2015-03-31",
		"from": "Den Haag Centraal",
		"to": "Amersfoort",
		"cost": 8.5
	},
	{
		"route": amersfoortToWageningen,
		"date": "2015-03-31",
		"from": "Amersfoort",
		"to": "Ede-Wageningen",
		"cost": 6.53 
	},
	{
	"route": wageningenToDenHaag,
	"date": "2015-04-02",
	"from": "Ede-Wageningen",
	"to": "Den Haag Centraal",
	"cost": 10
	},
	{
	"route": [        
	    [ 171 , 308 ],
	    [ 170 , 317 ],
	    [ 171 , 321 ],
	    [ 176 , 324 ],
	    [ 178 , 323 ],
	    [ 182 , 323 ],
	    [ 178 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-04-03",
	"from": "Boskoop ",
	"to": "Den Haag Centraal",
	"cost": 4.1

	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	],
	"date": "2015-04-03",
	"from": "Den Haag Centraal",
	"to": "Utrecht Centraal",
	"cost": 6.4

	},
	{
	"route": [        
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-04-06",
	"from": "Utrecht Centraal",
	"to": "Den Haag Centraal",
	"cost": 6.4

	},
	{
	"route": [        
	    [ 133 , 329 ],
	    [ 128 , 318 ],
	    [ 128 , 312 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 193 , 256 ],
	    [ 195 , 247 ],
	    [ 196 , 245 ],
	    [ 199 , 245 ],
	    [ 205 , 249 ],
	  ],
	"date": "2015-04-07",
	"from": "Delft ",
	"to": "Amsterdam Centraal",
	"cost": 7.6

	},
	{
	"route": denHaagToDelft,
	"date": "2015-04-09",
	"from": "Den Haag Centraal",
	"to": "Delft ",
	"cost": 1.4

	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	    [ 236 , 311 ],
	    [ 238 , 321 ],
	    [ 241 , 331 ],
	    [ 249 , 343 ],
	    [ 252 , 354 ],
	    [ 249 , 360 ],
	    [ 251 , 377 ],
	    [ 255 , 390 ],
	    [ 253 , 398 ],
	    [ 253 , 406 ],
	    [ 270 , 435 ],
	    [ 274 , 441 ],
	    [ 279 , 444 ],
	    [ 285 , 445 ],
	    [ 287 , 446 ],
	    [ 290 , 450 ],
	    [ 289 , 454 ],
	    [ 303 , 482 ],
	    [ 305 , 483 ],
	    [ 308 , 484 ],
	    [ 316 , 485 ],
	    [ 326 , 485 ],
	    [ 335 , 487 ],
	    [ 342 , 488 ],
	    [ 343 , 488 ],
	    [ 345 , 489 ],
	    [ 347 , 491 ],
	    [ 346 , 494 ],
	    [ 342 , 499 ],
	    [ 332 , 511 ],
	    [ 329 , 519 ],
	    [ 328 , 531 ],
	    [ 329 , 539 ],
	    [ 320 , 551 ],
	    [ 318 , 551 ],
	    [ 317 , 553 ],
	    [ 317 , 555 ],
	    [ 314 , 560 ],
	    [ 316 , 562 ],
	    [ 315 , 564 ],
	    [ 313 , 566 ],
	    [ 311 , 569 ],
	    [ 312 , 571 ],
	    [ 312 , 572 ],
	  ],
	"date": "2015-04-13",
	"from": "Den Haag Centraal",
	"to": "Maastricht",
	"cost": 15.1 

	},
	{
	"route": [        
	    [ 312 , 572 ],
	    [ 312 , 571 ],
	    [ 311 , 569 ],
	    [ 313 , 566 ],
	    [ 315 , 564 ],
	    [ 316 , 562 ],
	    [ 314 , 560 ],
	    [ 317 , 555 ],
	    [ 317 , 553 ],
	    [ 318 , 551 ],
	    [ 320 , 551 ],
	    [ 329 , 539 ],
	    [ 328 , 531 ],
	    [ 329 , 519 ],
	    [ 332 , 511 ],
	    [ 342 , 499 ],
	    [ 346 , 494 ],
	    [ 347 , 491 ],
	    [ 345 , 489 ],
	    [ 343 , 488 ],
	    [ 342 , 488 ],
	    [ 335 , 487 ],
	    [ 326 , 485 ],
	    [ 316 , 485 ],
	    [ 308 , 484 ],
	    [ 305 , 483 ],
	    [ 303 , 482 ],
	    [ 289 , 454 ],
	    [ 290 , 450 ],
	    [ 287 , 446 ],
	    [ 285 , 445 ],
	    [ 279 , 444 ],
	    [ 274 , 441 ],
	    [ 270 , 435 ],
	    [ 253 , 406 ],
	    [ 253 , 398 ],
	    [ 255 , 390 ],
	    [ 251 , 377 ],
	    [ 249 , 360 ],
	    [ 252 , 354 ],
	    [ 249 , 343 ],
	    [ 241 , 331 ],
	    [ 238 , 321 ],
	    [ 236 , 311 ],
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-04-16",
	"from": "Maastricht",
	"to": "Den Haag Centraal",
	"cost": 15.1 

	},
	{
	"route": [     
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 232 , 309 ],
	    [ 243 , 314 ],
	    [ 249 , 313 ],
	    [ 263 , 313 ],
	    [ 269 , 315 ],
	    [ 288 , 316 ],
	    [ 303 , 320 ],
	    [ 303 , 318 ],
	  ],
	"date": "2015-04-17",
	"from": "Den Haag Centraal",
	"to": "Ede-Wageningen",
	"cost": 10 

	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	    [ 236 , 311 ],
	    [ 238 , 321 ],
	    [ 241 , 331 ],
	    [ 249 , 343 ],
	    [ 252 , 354 ],
	    [ 249 , 360 ],
	    [ 251 , 377 ],
	    [ 255 , 390 ],
	    [ 253 , 398 ],
	    [ 253 , 406 ],
	    [ 270 , 435 ],
	    [ 274 , 441 ],
	    [ 279 , 444 ],
	    [ 285 , 445 ],
	    [ 287 , 446 ],
	    [ 290 , 450 ],
	    [ 289 , 454 ],
	    [ 303 , 482 ],
	    [ 305 , 483 ],
	    [ 308 , 484 ],
	    [ 316 , 485 ],
	    [ 326 , 485 ],
	    [ 335 , 487 ],
	    [ 342 , 488 ],
	    [ 343 , 488 ],
	    [ 345 , 489 ],
	    [ 347 , 491 ],
	    [ 346 , 494 ],
	    [ 342 , 499 ],
	    [ 332 , 511 ],
	    [ 329 , 519 ],
	    [ 328 , 531 ],
	    [ 329 , 539 ],
	    [ 320 , 551 ],
	    [ 318 , 551 ],
	    [ 317 , 553 ],
	    [ 317 , 555 ],
	    [ 314 , 560 ],
	    [ 316 , 562 ],
	    [ 315 , 564 ],
	    [ 313 , 566 ],
	    [ 311 , 569 ],
	    [ 312 , 571 ],
	    [ 312 , 572 ],
	  ],
	"date": "2015-04-22",
	"from": "Den Haag Centraal",
	"to": "Maastricht",
	"cost": 15.1 

	},
	{
	"route": [        
	    [ 312 , 572 ],
	    [ 312 , 571 ],
	    [ 311 , 569 ],
	    [ 313 , 566 ],
	    [ 315 , 564 ],
	    [ 316 , 562 ],
	    [ 314 , 560 ],
	    [ 317 , 555 ],
	    [ 317 , 553 ],
	    [ 318 , 551 ],
	    [ 320 , 551 ],
	    [ 329 , 539 ],
	    [ 328 , 531 ],
	    [ 329 , 519 ],
	    [ 332 , 511 ],
	    [ 342 , 499 ],
	    [ 346 , 494 ],
	    [ 347 , 491 ],
	    [ 345 , 489 ],
	    [ 343 , 488 ],
	    [ 342 , 488 ],
	    [ 335 , 487 ],
	    [ 326 , 485 ],
	    [ 316 , 485 ],
	    [ 308 , 484 ],
	    [ 305 , 483 ],
	    [ 303 , 482 ],
	    [ 289 , 454 ],
	    [ 290 , 450 ],
	    [ 287 , 446 ],
	    [ 285 , 445 ],
	    [ 279 , 444 ],
	    [ 274 , 441 ],
	    [ 270 , 435 ],
	    [ 253 , 406 ],
	    [ 253 , 398 ],
	    [ 255 , 390 ],
	    [ 251 , 377 ],
	    [ 249 , 360 ],
	    [ 252 , 354 ],
	    [ 249 , 343 ],
	    [ 241 , 331 ],
	    [ 238 , 321 ],
	    [ 236 , 311 ],
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-04-24",
	"from": "Maastricht",
	"to": "Den Haag Centraal",
	"cost": 15.1 

	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 193 , 256 ],
	    [ 195 , 247 ],
	    [ 196 , 245 ],
	    [ 199 , 245 ],
	    [ 205 , 249 ],
	  ],
	"date": "2015-04-24",
	"from": "Den Haag Centraal",
	"to": "Amsterdam Centraal",
	"cost": 6.7

	},
	{
	"route": delftToDenHaag,
	"date": "2015-04-28",
	"from": "Delft ",
	"to": "Den Haag Centraal",
	"cost": 1.4

	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	  ],
	"date": "2015-05-03",
	"from": "Den Haag Centraal",
	"to": "Utrecht Centraal",
	"cost": 6.4

	},
	{
	"route": [        
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-05-03",
	"from": "Utrecht Centraal",
	"to": "Den Haag Centraal",
	"cost": 6.4

	},
	{
	"route": [        
	    [ 128 , 307 ],
	    [ 131 , 310 ],
	    [ 128 , 312 ],
	    [ 128 , 318 ],
	    [ 133 , 329 ],
	    [ 135 , 331 ],
	  ],
	"date": "2015-05-06",
	"from": "Den Haag Centraal",
	"to": "Delft Zuid",
	"cost": 1.4

	},
	{
	"route": [        
	    [ 135 , 331 ],
	    [ 133 , 329 ],
	    [ 128 , 318 ],
	    [ 128 , 312 ],
	    [ 131 , 310 ],
	    [ 128 , 307 ],
	  ],
	"date": "2015-05-06",
	"from":"Delft Zuid",
	"to":"Den Haag Centraal",
	"cost": 0.9

	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	  ],
	"date": "2015-05-06",
	"from":"Den Haag Centraal",
	"to":"Utrecht Centraal",
	"cost": 10.7

	},
	{
	"route": [        
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-05-06",
	"from":"Utrecht Centraal",
	"to":"Den Haag Centraal",
	"cost": 6.4

	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 190 , 259 ],
	  ],
	"date": "2015-05-07",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost": 4.9

	},
	{
	"route": [        
	    [ 190 , 259 ],
	    [ 182 , 265 ],
	    [ 177 , 266 ],
	    [ 164 , 279 ],
	    [ 160 , 279 ],
	    [ 152 , 283 ],
	    [ 153 , 289 ],
	    [ 141 , 303 ],
	    [ 131 , 310 ],
	    [ 127 , 307 ],
	  ],
	"date": "2015-05-14",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost": 4.9

	},
	{
	"route": adamZuidToDenHaag,
	"date": "2015-05-23",
	"from": "Amsterdam Zuid",
	"to": "Den Haag Centraal",
	"cost": 5.90

	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	    [ 236 , 311 ],
	    [ 238 , 321 ],
	    [ 241 , 331 ],
	    [ 249 , 343 ],
	    [ 252 , 354 ],
	    [ 249 , 360 ],
	    [ 251 , 377 ],
	    [ 255 , 390 ],
	    [ 253 , 398 ],
	    [ 253 , 406 ],
	    [ 270 , 435 ],
	    [ 274 , 441 ],
	    [ 279 , 444 ],
	    [ 285 , 445 ],
	    [ 287 , 446 ],
	    [ 290 , 450 ],
	    [ 289 , 454 ],
	    [ 303 , 482 ],
	    [ 305 , 483 ],
	    [ 308 , 484 ],
	    [ 316 , 485 ],
	    [ 326 , 485 ],
	    [ 335 , 487 ],
	    [ 342 , 488 ],
	    [ 343 , 488 ],
	    [ 345 , 489 ],
	    [ 347 , 491 ],
	    [ 346 , 494 ],
	    [ 342 , 499 ],
	    [ 332 , 511 ],
	    [ 329 , 519 ],
	    [ 328 , 531 ],
	    [ 329 , 539 ],
	    [ 320 , 551 ],
	    [ 318 , 551 ],
	    [ 317 , 553 ],
	    [ 317 , 555 ],
	    [ 314 , 560 ],
	    [ 316 , 562 ],
	    [ 315 , 564 ],
	    [ 313 , 566 ],
	    [ 311 , 569 ],
	    [ 312 , 571 ],
	    [ 312 , 572 ],
	  ],
	"date": "2015-05-23",
	"from": "Den Haag Centraal",
	"to": "Maastricht",
	"cost": 9.5 

	},
	{
			"route": [        
	    [ 312 , 572 ],
	    [ 312 , 571 ],
	    [ 311 , 569 ],
	    [ 313 , 566 ],
	    [ 315 , 564 ],
	    [ 316 , 562 ],
	    [ 314 , 560 ],
	    [ 317 , 555 ],
	    [ 317 , 553 ],
	    [ 318 , 551 ],
	    [ 320 , 551 ],
	    [ 329 , 539 ],
	    [ 328 , 531 ],
	    [ 329 , 519 ],
	    [ 332 , 511 ],
	    [ 342 , 499 ],
	    [ 346 , 494 ],
	    [ 347 , 491 ],
	    [ 345 , 489 ],
	    [ 343 , 488 ],
	    [ 342 , 488 ],
	    [ 335 , 487 ],
	    [ 326 , 485 ],
	    [ 316 , 485 ],
	    [ 308 , 484 ],
	    [ 305 , 483 ],
	    [ 303 , 482 ],
	    [ 289 , 454 ],
	    [ 290 , 450 ],
	    [ 287 , 446 ],
	    [ 285 , 445 ],
	    [ 279 , 444 ],
	    [ 274 , 441 ],
	    [ 270 , 435 ],
	    [ 253 , 406 ],
	    [ 253 , 398 ],
	    [ 255 , 390 ],
	    [ 251 , 377 ],
	    [ 249 , 360 ],
	    [ 252 , 354 ],
	    [ 249 , 343 ],
	    [ 241 , 331 ],
	    [ 238 , 321 ],
	    [ 236 , 311 ],
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	],
	  "date": "2015-05-29",
	  "from": "Maastricht",
	  "to": "Den Haag Centraal",
	  "cost": 15.1 

	},
	{
	  "route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 190 , 259 ],
	  ],
	"date": "2015-05-29",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost": 4.9

	},
	{
	"route": [        
	    [ 190 , 259 ],
	    [ 182 , 265 ],
	    [ 177 , 266 ],
	    [ 164 , 279 ],
	    [ 160 , 279 ],
	    [ 152 , 283 ],
	    [ 153 , 289 ],
	    [ 141 , 303 ],
	    [ 131 , 310 ],
	    [ 127 , 307 ],
	],
	"date": "2015-07-14",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost": 4.9

	},
	{
		"route": [        
	      [ 127 , 307 ],
	      [ 131 , 310 ],
	      [ 141 , 303 ],
	      [ 153 , 289 ],
	      [ 152 , 283 ],
	      [ 151 , 277 ],
	      [ 163 , 263 ],
	      [ 168 , 246 ],
	      [ 170 , 246 ],
	  ],
	"date": "2015-07-15",
	"from":"Den Haag Centraal",
	"to":"Haarlem",
	"cost":4.9  
	},
	{
		"route": [        
	      [ 170 , 246 ],
	      [ 168 , 246 ],
	      [ 163 , 263 ],
	      [ 151 , 277 ],
	      [ 152 , 283 ],
	      [ 153 , 289 ],
	      [ 141 , 303 ],
	      [ 131 , 310 ],
	      [ 127 , 307 ],
	  ],
	"date": "2015-07-15",
	"from":"Haarlem",
	"to":"Den Haag Centraal",
	"cost":4.9

	},
	{ 
	"route": denHaagToAdamZuid,
	"date": "2015-07-20",
	"from": "Den Haag Centraal",
	"to": "Amsterdam Zuid",
	"cost": 9.90

	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	  ],
	"date": "2015-07-24",
	"from": "Den Haag Centraal",
	"to": "Utrecht Centraal",
	"cost": 10.7

	},
	{
	"route": [        
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-07-24",
	"from": "Utrecht Centraal",
	"to": "Den Haag Centraal",
	"cost": 6.4  
	},
	{
	"route": [        
	[ 127 , 307 ],
	[ 131 , 310 ],
	[ 141 , 303 ],
	[ 153 , 289 ],
	[ 152 , 283 ],
	[ 160 , 279 ],
	[ 164 , 279 ],
	[ 177 , 266 ],
	[ 182 , 265 ],
	[ 190 , 259 ],
	],
	"date": "2015-08-04",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":8.2
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2015-08-04",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"date": "2015-08-04",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Bijlmer ArenA",
	"cost":6.5
	},
	{
	"date": "2015-08-04",
	"from":"Amsterdam Bijlmer ArenA",
	"to":"Den Haag Centraal",
	"cost":6.5
	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 179 , 323 ],
	    [ 186 , 323 ],
	    [ 191 , 321 ],
	    [ 198 , 314 ],
	    [ 200 , 311 ],
	    [ 204 , 308 ],
	    [ 211 , 305 ],
	    [ 224 , 305 ],
	    [ 230 , 306 ],
	    [ 231 , 308 ],
	    [ 233 , 310 ],
	  ],
	"date": "2015-08-10",
	"from":"Den Haag Centraal",
	"to":"Utrecht Centraal",
	"cost":10.7
	},
	{
	"route": [        
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-08-10",
	"from":"Utrecht Centraal",
	"to":"Den Haag Centraal",
	"cost":6.4
	},
	{
		"route": denHaagToAdamZuid,
	"date": "2015-08-12",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":9.9
	},
	{
	"date": "2015-08-13",
	"from":"Amsterdam Zuid",
	"to":"Utrecht Centraal",
	"cost":4.0
	},
	{
	"date": "2015-08-14",
	"from":"Utrecht Centraal",
	"to":"Amsterdam Zuid",
	"cost":4.0
	},
	{
	"date": "2015-08-14",
	"from":"Amsterdam Zuid",
	"to":"Schiphol",
	"cost":2.7
	},
	{
	"date": "2015-08-19",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Amstel",
	"cost":6.5
	},
	{
	"route": [        
	    [ 233 , 310 ],
	    [ 231 , 308 ],
	    [ 230 , 306 ],
	    [ 224 , 305 ],
	    [ 211 , 305 ],
	    [ 204 , 308 ],
	    [ 200 , 311 ],
	    [ 198 , 314 ],
	    [ 191 , 321 ],
	    [ 186 , 323 ],
	    [ 179 , 323 ],
	    [ 172 , 325 ],
	    [ 159 , 320 ],
	    [ 150 , 315 ],
	    [ 141 , 315 ],
	    [ 135 , 313 ],
	    [ 128 , 308 ],
	  ],
	"date": "2015-08-23",
	"from":"Utrecht Centraal",
	"to":"Den Haag Centraal",
	"cost":6.4
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2015-08-28",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":5.9
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2015-08-30",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":5.9
	},
	{
	"date": "2015-09-01",
	"from":"Den Haag Centraal",
	"to":"Gouda",
	"cost":3.3
	},
	{
	"date": "2015-09-01",
	"from":"Waddinxveen",
	"to":"Den Haag Centraal",
	"cost":4.1
	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 193 , 256 ],
	    [ 195 , 247 ],
	    [ 196 , 245 ],
	    [ 199 , 245 ],
	    [ 205 , 249 ],
	  ],
	"date": "2015-09-05",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Centraal",
	"cost":6.7
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2015-09-06",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"date": "2015-09-14",
	"from":"Den Haag Centraal",
	"to":"Alphen aan den Rijn",
	"cost":3.5
	},
	{
	"date": "2015-09-14",
	"from":"Alphen aan den Rijn",
	"to":"Den Haag Centraal",
	"cost":5.9
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2015-09-17",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":5.9
	},
	{
	"date": "2015-09-17",
	"from":"Amsterdam Bijlmer ArenA",
	"to":"Den Haag Centraal",
	"cost":6.5
	},
	{
	"date": "2015-09-18",
	"from":"Den Haag Centraal",
	"to":"Woerden",
	"cost":8.2
	},
	{
	"route": denHaagToDelft,
	"date": "2015-09-22",
	"from":"Den Haag Centraal",
	"to":"Delft",
	"cost":1.4
	},
	{
	"date": "2015-09-23",
	"from":"Woerden",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"route": denHaagToAdamZuid,	
	"date": "2015-09-25",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":5.9
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2015-09-27",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"route": [        
	[ 127 , 307 ],
	[ 131 , 310 ],
	[ 141 , 303 ],
	[ 153 , 289 ],
	[ 152 , 283 ],
	[ 151 , 277 ],
	[ 163 , 263 ],
	[ 168 , 246 ],
	[ 170 , 246 ],
	],
	"date": "2015-10-02",
	"from":"Den Haag Centraal",
	"to":"Haarlem",
	"cost":4.9
	},
	{
	"route": [        
	[ 170 , 246 ],
	[ 168 , 246 ],
	[ 163 , 263 ],
	[ 151 , 277 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2015-10-02",
	"from":"Haarlem",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"route": [        
	[ 127 , 307 ],
	[ 131 , 310 ],
	[ 141 , 303 ],
	[ 153 , 289 ],
	[ 152 , 283 ],
	[ 160 , 279 ],
	[ 164 , 279 ],
	[ 177 , 266 ],
	[ 182 , 265 ],
	[ 190 , 259 ],
	],
	"date": "2015-10-03",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":4.9
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2015-10-16",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":5.9
	},
	{
	"route": [
	[ 200 , 255 ],
	[ 193 , 256 ],
	[ 190 , 259 ],
	[ 193 , 256 ],
	[ 195 , 247 ],
	[ 196 , 245 ],
	[ 187 , 247 ],
	[ 184 , 246 ],
	[ 172 , 247 ],
	[ 170 , 246 ],
	],
	"date": "2015-10-18",
	"from":"Amsterdam Zuid",
	"to":"Haarlem",
	"cost":3.6
	},
	{
	"route": [        
	[ 170 , 246 ],
	[ 168 , 246 ],
	[ 163 , 263 ],
	[ 151 , 277 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2015-10-18",
	"from":"Haarlem",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"date": "2015-10-25",
	"from":"Utrecht Centraal",
	"to":"Ede-Wageningen",
	"cost":4.6
	},
	{
	"route": wageningenToDenHaag,
	"date": "2015-10-26",
	"from":"Ede-Wageningen",
	"to":"Den Haag Centraal",
	"cost":10.0
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2015-11-05",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":5.9
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2015-11-08",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":5.9
	},
	{
	"date": "2015-11-14",
	"from":"Den Haag Centraal",
	"to":"Alphen aan den Rijn",
	"cost":3.5
	},
	{
	"date": "2015-11-14",
	"from":"Woerden",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"route": [        
	[ 127 , 307 ],
	[ 131 , 310 ],
	[ 141 , 303 ],
	[ 153 , 289 ],
	[ 152 , 283 ],
	[ 151 , 277 ],
	[ 163 , 263 ],
	[ 168 , 246 ],
	[ 170 , 246 ],
	],
	"date": "2015-11-18",
	"from":"Den Haag Centraal",
	"to":"Haarlem",
	"cost":4.9
	},
	{
	"route": [        
	[ 170 , 246 ],
	[ 168 , 246 ],
	[ 163 , 263 ],
	[ 151 , 277 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2015-11-18",
	"from":"Haarlem",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2015-11-21",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":5.9
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2015-11-23",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":5.9
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2015-12-04",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":5.9
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2015-12-05",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":5.9
	},
	{
	"route": [        
	[ 127 , 307 ],
	[ 131 , 310 ],
	[ 141 , 303 ],
	[ 153 , 289 ],
	[ 152 , 283 ],
	[ 160 , 279 ],
	[ 164 , 279 ],
	[ 177 , 266 ],
	[ 182 , 265 ],
	[ 190 , 259 ],
	],
	"date": "2015-12-07",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":4.9
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2015-12-26",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":4.9
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2016-01-08",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":6.1
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2016-01-10",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":6.1
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2016-01-22",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":6.1
	},
	{
	"route": [
	[ 200 , 255 ],
	[ 193 , 256 ],
	[ 190 , 259 ],
	[ 193 , 256 ],
	[ 195 , 247 ],
	[ 196 , 245 ],
	[ 187 , 247 ],
	[ 184 , 246 ],
	[ 172 , 247 ],
	[ 170 , 246 ],
	],
	"date": "2016-01-23",
	"from":"Amsterdam Zuid",
	"to":"Haarlem",
	"cost":3.7
	},
	{
	"route": [
	[ 170 , 246 ],
	[ 172 , 247 ],
	[ 184 , 246 ],
	[ 187 , 247 ],
	[ 196 , 245 ],
	[ 195 , 247 ],
	[ 193 , 256 ],
	[ 190 , 259 ],
	[ 193 , 256 ],
	[ 200 , 255 ],
	],
	"date": "2016-01-23",
	"from":"Haarlem",
	"to":"Amsterdam Zuid",
	"cost":3.7
	},
	{
	"date": "2016-01-24",
	"from":"Amsterdam Centraal",
	"to":"Hoorn",
	"cost":4.9
	},
	{
	"date": "2016-01-24",
	"from":"Hoorn",
	"to":"Den Haag Centraal",
	"cost":10.0
	},
	{
	"date": "2016-01-26",
	"from":"Den Haag Centraal",
	"to":"Woerden",
	"cost":8.3
	},
	{
	"date": "2016-01-26",
	"from":"Woerden",
	"to":"Den Haag Centraal",
	"cost":5.0
	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 190 , 259 ],
	  ],
	"date": "2016-01-27",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":5.0
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2016-06-28",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":5.0
	},
	{
	"date": "2016-06-30",
	"from":"Den Haag Centraal",
	"to":"Woerden",
	"cost":8.3
	},
	{
	"date": "2016-06-30",
	"from":"Woerden",
	"to":"Den Haag Centraal",
	"cost":5.0
	},
	{
	"date": "2016-07-02",
	"from":"Den Haag Centraal",
	"to":"Woerden",
	"cost":5.0
	},
	{
	"date": "2016-07-02",
	"from":"Woerden",
	"to":"Den Haag Centraal",
	"cost":5.0
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2016-07-03",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":6.1
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2016-07-04",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":6.1
	},
	{
	"route": [        
	    [ 128 , 308 ],
	    [ 135 , 313 ],
	    [ 141 , 315 ],
	    [ 150 , 315 ],
	    [ 159 , 320 ],
	    [ 172 , 325 ],
	    [ 178 , 323 ],
	    [ 182 , 323 ],
	    [ 178 , 323 ],
	    [ 176 , 324 ],
	    [ 171 , 321 ],
	    [ 170 , 317 ],
	    [ 171 , 308 ],
	  ],
	"date": "2016-07-05",
	"from":"Den Haag Centraal",
	"to":"Boskoop",
	"cost":4.2
	},
	{
	"date": "2016-07-05",
	"from":"Boskoop",
	"to":"Ede-Wageningen",
	"cost":8.8
	},
	{
	"route": wageningenToDenHaag,
	"date": "2016-07-06",
	"from":"Ede-Wageningen",
	"to":"Den Haag Centraal",
	"cost":10.3
	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 190 , 259 ],
	  ],
	"date": "2016-07-07",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":8.3
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2016-08-08",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":5.0
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2016-08-14",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":5.0
	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 190 , 259 ],
	  ],
	"date": "2016-08-17",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":8.3
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2016-08-17",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":7.1
	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 190 , 259 ],
	  ],
	"date": "2016-08-20",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":5.0
	},
	{
	"route": [        
	[ 190 , 259 ],
	[ 182 , 265 ],
	[ 177 , 266 ],
	[ 164 , 279 ],
	[ 160 , 279 ],
	[ 152 , 283 ],
	[ 153 , 289 ],
	[ 141 , 303 ],
	[ 131 , 310 ],
	[ 127 , 307 ],
	],
	"date": "2016-11-16",
	"from":"Schiphol",
	"to":"Den Haag Centraal",
	"cost":5.0
	},
	{
	"route": denHaagToAdamZuid,
	"date": "2016-11-19",
	"from":"Den Haag Centraal",
	"to":"Amsterdam Zuid",
	"cost":6.1
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2016-11-20",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":6.1
	},
	{
	"route": [        
	    [ 128 , 307 ],
	    [ 131 , 310 ],
	    [ 128 , 312 ],
	    [ 128 , 318 ],
	    [ 133 , 329 ],
	    [ 135 , 331 ],
	  ],
	"date": "2016-11-23",
	"from":"Den Haag Centraal",
	"to":"Delft Zuid",
	"cost":2.7
	},
	{
	"route": [        
	    [ 135 , 331 ],
	    [ 133 , 329 ],
	    [ 128 , 318 ],
	    [ 128 , 312 ],
	    [ 131 , 310 ],
	    [ 128 , 307 ],
	  ],
	"date": "2016-11-23",
	"from":"Delft Zuid",
	"to":"Den Haag Centraal",
	"cost":1.6
	},
	{
	"date": "2016-11-25",
	"from":"Den Haag Centraal",
	"to":"Rotterdam Centraal",
	"cost":2.9
	},
	{
	"date": "2016-11-26",
	"from":"Rotterdam Centraal",
	"to":"Den Haag Centraal",
	"cost":2.9
	},
	{
	"route": [        
	    [ 128 , 307 ],
	    [ 131 , 310 ],
	    [ 128 , 312 ],
	    [ 128 , 318 ],
	    [ 133 , 329 ],
	    [ 135 , 331 ],
	  ],
	"date": "2016-12-02",
	"from":"Den Haag Centraal",
	"to":"Delft Zuid",
	"cost":1.6
	},
	{
	"route": [        
	    [ 135 , 331 ],
	    [ 133 , 329 ],
	    [ 128 , 318 ],
	    [ 128 , 312 ],
	    [ 131 , 310 ],
	    [ 128 , 307 ],
	  ],
	"date": "2016-12-03",
	"from":"Delft Zuid",
	"to":"Den Haag Centraal",
	"cost":1.6
	},
	{
	"route": adamZuidToDenHaag,
	"date": "2016-12-04",
	"from":"Amsterdam Zuid",
	"to":"Den Haag Centraal",
	"cost":6.1
	},
	{
	"route": [        
	    [ 127 , 307 ],
	    [ 131 , 310 ],
	    [ 141 , 303 ],
	    [ 153 , 289 ],
	    [ 152 , 283 ],
	    [ 160 , 279 ],
	    [ 164 , 279 ],
	    [ 177 , 266 ],
	    [ 182 , 265 ],
	    [ 190 , 259 ],
	  ],
	"date": "2016-12-06",
	"from":"Den Haag Centraal",
	"to":"Schiphol",
	"cost":5.0
	},
]