const hre = require("hardhat");
const fs = require('fs');

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const ADToken = await hre.ethers.getContractFactory("ADToken");
    const adToken = await ADToken.deploy(deployer.address, {
        gasLimit: "0x100000", // Example, adjust based on your needs
      }); // Deploying the contract

    console.log("ADToken deployed to:", adToken.address);

    fs.writeFileSync('./config.js', `
export const adTokenAddress = "${adToken.address}";
    `);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
