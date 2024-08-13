import { FishjamClient } from '@fishjam-cloud/ts-client';

type PeerMetadata = {
    name: string;
};

type TrackMetadata = {
    type: 'camera' | 'screen';
}

const client = new FishjamClient<PeerMetadata, TrackMetadata>();


// client.connect({ peerMetadata: { name: 'peer' } });

export function hello() {
    console.log("test");
}

hello();
