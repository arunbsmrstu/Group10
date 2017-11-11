{
  'targets': [
    {
      'target_name': 'mraa',
      'sources': [
        'src/x86/intel_joule_expansion.c',
'src/x86/up2.c',
'src/x86/up.c',
'src/x86/intel_cherryhills.c',
'src/x86/intel_sofia_3gr.c',
'src/x86/intel_minnow_byt_compatible.c',
'src/x86/intel_nuc5.c',
'src/x86/intel_de3815.c',
'src/x86/intel_edison_fab_c.c',
'src/x86/intel_galileo_rev_g.c',
'src/x86/intel_galileo_rev_d.c',
'src/x86/x86.c',
'src/arm/de_nano_soc.c',
'src/arm/banana.c',
'src/arm/phyboard.c',
'src/arm/beaglebone.c',
'src/arm/raspberry_pi.c',
'src/arm/96boards.c',
'src/arm/arm.c',
'src/iio/iio.c',
'src/uart_ow/uart_ow.c',
'src/firmata/firmata_mraa.c',
'src/firmata/firmata.c',
'src/grovepi/grovepi.c',
'src/uart/uart.c',
'src/aio/aio.c',
'src/spi/spi.c',
'src/pwm/pwm.c',
'src/i2c/i2c.c',
'src/gpio/gpio.c',
'src/mraa.c',

        'src/version.c',
        'src/mraajsJAVASCRIPT_wrap.cxx'
      ],
      'include_dirs': [
        'include',
'api/mraa',
'api',

      ],
      'variables': {
        "v8_version%": "<!(`command -v nodejs 2> /dev/null || echo node` -e 'console.log(process.versions.v8)' | sed 's/\.//g' | cut -c 1-5)",
        "arch%": "<!(`command -v nodejs 2> /dev/null || echo node` -e 'console.log(process.arch)')"
      },
      'cflags_cc!': [ '-fno-rtti', '-fno-exceptions' ],
      'cflags!': [ '-fno-exceptions' ],
      'conditions' : [
        ['OS=="android"', {
          'sources' : [ 'src/glob/glob.c' ],
          'include_dirs' : [ 'src/glob' ],
        }],
        [ 'arch=="x64" or arch=="ia32"', {
          'defines' : [ 'X86PLAT=ON' ],
        }],
        [ 'arch=="arm"', {
          'defines' : [ 'ARMPLAT=ON'],
        }],
      ],
      'defines' : [
        'SWIG',
        'SWIGJAVASCRIPT',
        'FIRMATA=ON',
        'ONEWIRE=ON',
        'BUILDING_NODE_EXTENSION=1',
        'SWIG_V8_VERSION=0x0<(v8_version)',
        'V8_VERSION=0x0<(v8_version)'
      ]
    }
  ]
}
