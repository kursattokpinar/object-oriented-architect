import { Optional } from '../../core/Optional';
import { NetworkAdapterV1 } from '../sub/network/pub/NetworkAdapter';

export interface NetworkAdapterProfileV1 {
    networkAdapter: Optional<NetworkAdapterV1>;
}
