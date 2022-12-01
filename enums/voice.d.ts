declare namespace RageEnums.Voice {

    const enum BASSFXChan {
        BASS_BFX_CHANALL = -1,
        BASS_BFX_CHANNONE = 0,
        BASS_BFX_CHAN1 = 1,
        BASS_BFX_CHAN2 = 2,
        BASS_BFX_CHAN3 = 4,
        BASS_BFX_CHAN4 = 8,
        BASS_BFX_CHAN5 = 16,
        BASS_BFX_CHAN6 = 32,
        BASS_BFX_CHAN7 = 64,
        BASS_BFX_CHAN8 = 128,
        BASS_BFX_CHAN9 = 256,
        BASS_BFX_CHAN10 = 512,
        BASS_BFX_CHAN11 = 1024,
        BASS_BFX_CHAN12 = 2048,
        BASS_BFX_CHAN13 = 4096,
        BASS_BFX_CHAN14 = 8192,
        BASS_BFX_CHAN15 = 16384,
        BASS_BFX_CHAN16 = 32768,
        BASS_BFX_CHAN17 = 65536,
        BASS_BFX_CHAN18 = 131072,
        BASS_BFX_CHAN19 = 262144,
        BASS_BFX_CHAN20 = 524288,
        BASS_BFX_CHAN21 = 1048576,
        BASS_BFX_CHAN22 = 2097152,
        BASS_BFX_CHAN23 = 4194304,
        BASS_BFX_CHAN24 = 8388608,
        BASS_BFX_CHAN25 = 16777216,
        BASS_BFX_CHAN26 = 33554432,
        BASS_BFX_CHAN27 = 67108864,
        BASS_BFX_CHAN28 = 134217728,
        BASS_BFX_CHAN29 = 268435456,
        BASS_BFX_CHAN30 = 536870912
    }

    const enum BASSFXType {
        BASS_FX_DX8_CHORUS,
        BASS_FX_DX8_COMPRESSOR,
        BASS_FX_DX8_DISTORTION,
        BASS_FX_DX8_ECHO,
        BASS_FX_DX8_FLANGER,
        BASS_FX_DX8_GARGLE,
        BASS_FX_DX8_I3DL2REVERB,
        BASS_FX_DX8_PARAMEQ,
        BASS_FX_DX8_REVERB,
        BASS_FX_VOLUME,
    
        // bass_fx.dll
        BASS_FX_BFX_PEAKEQ = 65540,
        BASS_FX_BFX_BQF = 65555
    }

    const enum BASSFXPhase {
        BASS_FX_PHASE_NEG_180, // Phase differential between left and right LFOs (-180)
        BASS_FX_PHASE_NEG_90, // Phase differential between left and right LFOs (-90)
        BASS_FX_PHASE_ZERO, // Phase differential between left and right LFOs (+/-0)
        BASS_FX_PHASE_90, // Phase differential between left and right LFOs (+90)
        BASS_FX_PHASE_180 // Phase differential between left and right LFOs (+180)
    }


}