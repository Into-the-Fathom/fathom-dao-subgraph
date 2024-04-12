// AS compiler does not like interface
export class Addresses {
    Governor: string
    Staking: string
    VFTHM: string
    blockNumber: string
    network: string
    FTHM: string
  }
  
  // AS compiler does not like const
  export let addresses: Addresses = {
    Governor: '{{Governor}}',
    Staking: '{{Staking}}',
    VFTHM: '{{VFTHM}}',
    blockNumber: '{{blockNumber}}',
    network: '{{network}}',
    FTHM: '{{FTHM}}'
  }