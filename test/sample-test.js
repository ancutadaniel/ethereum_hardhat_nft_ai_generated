const { expect } = require('chai');
const { ethers } = require('hardhat');

require('chai').use(require('chai-as-promised')).should();

describe('DacetherCollection', function () {
  let dacetherCollection;

  beforeEach(async () => {
    const DacetherCollection = await ethers.getContractFactory(
      'DacetherCollection'
    );
    dacetherCollection = await DacetherCollection.deploy();
    await dacetherCollection.deployed();

    console.log(
      'AI NFT collection was deployed to:',
      dacetherCollection.address
    );
  });

  it('Should mint NFT with tokenID 1', async function () {
    const [user1] = await ethers.getSigners();
    await DacetherCollection.connect(user1).mint(
      'https://ipfs.io/ipfs/QmS416JXfsW8kUJ5fcvabbaeabvd5g1n8pfnkt9Wk4pJLE'
    );

    result = await DacetherCollection.ownerOf(1);
    result.should.equal(user1.address);
  });
});
