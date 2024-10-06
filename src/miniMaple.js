class MiniMaple{
    constructor(string, x){
        this.units = new Map()
		this.string = string
		this.x = x
		this.divide(this.string)
    }

	divide(str){
		let cur_sign = true
		let buffer = ""
		for(let i = 0; i < str.length; i++) {
			switch (str[i]) {
				case '-':
					this.units.set(buffer, cur_sign)
					buffer = ""
					cur_sign = false
					break

				case '+':
					this.units.set(buffer, cur_sign)
					buffer = ""
					cur_sign = true
					break

				default:
					buffer += str[i]
			}
		}
		this.units.set(buffer, cur_sign)
	}

	calculate() {
		let res = ""
		this.units.forEach((value, key) => {
			let num = 1
			let pow_x = 0
			let cur_res = ""
			let cur_number = ""
			let after_x = false
			let pow = false
			if(key.includes(this.x)) {
				for(let i = 0; i < key.length; i++) {
					switch(key[i]) {
						case this.x:
							after_x = true
							break
						case '^':
							if (after_x) pow_x = 1
							else {
								cur_res += "^"
								pow = true
							}
							break
						case '0':
						case '1':
						case '2':
						case '3':
						case '4':
						case '5':
						case '6':
						case '7':
						case '8':
						case '9':
							if (i !== key.length && !isNaN(key[i + 1]) ) {
								cur_number += key[i]
							} else if (pow) {
								cur_res += cur_number + key[i]
							} else {
								num *= Number(cur_number + key[i])
								if (pow_x) {
									cur_res += "*" + this.x
									if (Number(cur_number + key[i]) > 2)
										cur_res += "^" + (Number(cur_number + key[i]) - 1)
								}
								cur_number = ""
							}
							break
						default:
							after_x = false
							cur_res += key[i]

					}

				}
				if(!value) res += "-"
				else if(res !== "") res += "+"
				res += num + cur_res
			}

		})
		let validate = res.replace(/-1\*/g, "-")
						  .replace(/\+1\*/g, "-")
						  .replace(/\*\*/g, "*")
		return (validate.slice(-1) === "*") ? validate.slice(0, -1) : validate

	}
}

export {MiniMaple}