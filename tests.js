const chai = window.chai
const expect = chai.expect

describe('Wheel of Doom', () => {
    it('Puedo elegir candidatas aleatoriamente y las quito de la lista', () => {
  
      let coders = ["Luis", "Kevin", "Alex", "Desi", "Marta", "Javi", "Edu"];
      let position = 1;
  
      let coder = seleccionarCoder(coders, position);
  
      expect(coder).to.equal("Alisa")
      expect(coders).to.have.same.members(["Luis", "Alex", "Desi", "Marta", "Javi", "Edu"])
    })
  })
