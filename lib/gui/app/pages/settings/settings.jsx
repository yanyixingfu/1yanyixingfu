'use strict'

// eslint-disable-next-line no-unused-vars
const React = require('react')
const { open } = require('../../os/open-external/services/open-external')
const {
  default: styled
} = require('styled-components')

const CenteredDiv = styled.div `
  position: absolute;
  left: 50%;
  top: 1.5em;
  transform: translate(-50%, -50%);

  > img {
    cursor: pointer;
  }
`

const Settings = () => {
  const unsafeMode = JSON.stringify({
    description: `Are you sure you want to turn this on?
      You will be able to overwrite your system drives if you're not careful.`,
    confirmationLabel: 'Enable unsafe mode'
  })

  return (
    <div className="page-settings text-left">
      <h1 className="title space-bottom-large">Settings</h1>

      <div className="checkbox">
        <label>
          <input type="checkbox"
            tabindex="6"
            ng-model="settings.currentData.errorReporting"
            ng-change="settings.toggle('errorReporting')"
          />

          <span>Anonymously report errors and usage statistics to balena.io</span>
        </label>
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox"
            tabindex="7"
            ng-model="settings.currentData.unmountOnSuccess"
            ng-change="settings.toggle('unmountOnSuccess')"
          />

          <span>
            <span ng-show="settings.platform == 'win32'">Eject</span>
            <span ng-hide="settings.platform == 'win32'">Auto-unmount</span>
            on success
          </span>
        </label>
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox"
            tabindex="8"
            ng-model="settings.currentData.validateWriteOnSuccess"
            ng-change="settings.toggle('validateWriteOnSuccess')"
          />

          <span>Validate write on success</span>
        </label>
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox"
            tabindex="8"
            ng-model="settings.currentData.trim"
            ng-change="settings.toggle('trim')"
          />

          <span>{'Trim ext{2,3,4} partitions before writing (raw images only)'}</span>
        </label>
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox"
            tabindex="9"
            ng-model="settings.currentData.updatesEnabled"
            ng-change="settings.toggle('updatesEnabled')"
          />

          <span>Auto-updates enabled</span>
        </label>
      </div>

      <div className="checkbox" ng-if="settings.shouldShowUnsafeMode()">
        <label>
          <input type="checkbox"
            tabindex="10"
            ng-model="settings.currentData.unsafeMode"
            ng-change={`settings.toggle('unsafeMode', ${unsafeMode})`}
          />
          <span>Unsafe mode <span className="label label-danger">Dangerous</span></span>
        </label>
      </div>

      <CenteredDiv
        onClick={open.bind(null, 'https://www.balena.io?ref=etcher')}
      >
        <SvgIcon
          paths={[ '../../assets/etcher.svg' ]}
          width='114px'
          height='20px'
        >
        </SvgIcon>
      </CenteredDiv>

    </div>

  )
}

module.exports = Settings
