import * as fs from 'fs'
import * as mustache from 'mustache'
import * as networkAddresses from '../networks/addresses.json'
import { Addresses } from './addresses.template'

// mustache doesn't like numbered object keys
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let renameAddresses: any = networkAddresses
renameAddresses['apothem'] = networkAddresses['51']

export let addresses: Addresses = {
  Governor: '{{apothem.Governor}}',
  Staking: '{{apothem.Staking}}',
  VFTHM: '{{apothem.VFTHM}}',
  blockNumber: '',
  network: '',
}

const main = (): void => {
  try {
    let output = JSON.parse(mustache.render(JSON.stringify(addresses), renameAddresses))
    output.blockNumber = '42201579' // Block when first contract was created
    output.network = 'apothem'
    fs.writeFileSync(__dirname + '/generatedAddresses.json', JSON.stringify(output, null, 2))
  } catch (e) {
    console.log(`Error saving artifacts: ${e.message}`)
  }
}

main()