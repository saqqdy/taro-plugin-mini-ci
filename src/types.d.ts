import type { IMinidev, useDefaults } from 'minidev'
import type TTInstance from 'tt-ide-cli'

export interface AlipayInstance {
	minidev: IMinidev
	useDefaults: typeof useDefaults
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TTInstance = typeof TTInstance

export module DingTalk {
	interface IOpenSDKConfig {
		appKey: string
		appSecret: string
		accessToken?: string
		host?: string
	}

	export interface ITaskProgressMessage<T> {
		status: 'pending' | 'building' | 'success' | 'failed' | 'overtime'
		data: T
	}
	export interface ITaskOptionBase {
		project: string
		miniAppId: string
		onProgressUpdate: <T>(message: ITaskProgressMessage<T>) => void
	}
	export interface IBuildTaskParams extends ITaskOptionBase {
		packageVersion?: string
	}
	interface IPreviewBuildOptions extends ITaskOptionBase {
		page?: string
		query?: string
		corpId?: string
		ignoreHttpReqPermission?: boolean
		ignoreWebViewDomainCheck?: boolean
		buildTarget:
			| 'Preview'
			| 'RemoteLegacy'
			| 'RemoteX'
			| 'RemoteXLite'
			| 'RemoteBoatman'
			| 'Publish'
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface MiniAppOpenSDK {
		/** 配置 */
		setConfig(config: IOpenSDKConfig)

		/** 预览小程序 */
		previewBuild(options: IPreviewBuildOptions): Promise<string>

		/** 上传小程序 */
		miniUpload(options: IBuildTaskParams)
	}
}
