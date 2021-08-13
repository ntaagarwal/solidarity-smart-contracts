// compile -> deploy -> execute
async function main(){
    const [owner, randoPerson] = await ethers.getSigners(); 
    const waveContractFactor = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactor.deploy();
    await waveContract.deployed(); // Officially deployed to blockchain
    console.log("Contracted deployed to:", waveContract.address); // Prints address on blockchain
    console.log("Contracted deployed by: ", owner.address);

    let waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
