const { expect } = require('chai')

describe('randNFT', () => {
  let signers, randNFT

  beforeEach(async () => {
    signers = await ethers.getSigners()

    const RandNFT = await ethers.getContractFactory('RandNFT')
    randNFT = await RandNFT.deploy()
  })

  describe('Minting', () => {
    it('Should mint a new Token', async () => {
      expect(await randNFT.balanceOf(signers[0].address)).to.equal(0)
      
      await randNFT.mint(signers[0].address)

      expect(await randNFT.balanceOf(signers[0].address)).to.equal(1)
    })
  })
})