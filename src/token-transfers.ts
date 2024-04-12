import { Transfer as TransferEvent } from "../generated/StakingPackage/ERC20";
import { TransferEvent as TransferEntity } from "../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";


export function handleTransfer(event: TransferEvent): void {
  let entity = new TransferEntity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.value = event.params.value;
  entity.transaction = event.transaction.hash;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.tokenAddress = event.address;  // Adding the contract address to distinguish between FTHM and vFTHM

  entity.save();
}
