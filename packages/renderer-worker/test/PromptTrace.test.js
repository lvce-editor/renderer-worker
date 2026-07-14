import { beforeEach, expect, jest, test } from '@jest/globals'

jest.unstable_mockModule('../src/parts/FileSystem/FileSystemDisk.js', () => ({
  mkdir: jest.fn(),
  writeFile: jest.fn(),
}))

jest.unstable_mockModule('../src/parts/Workspace/Workspace.js', () => ({
  getPath: jest.fn(),
}))

const FileSystemDisk = await import('../src/parts/FileSystem/FileSystemDisk.js')
const PromptTrace = await import('../src/parts/PromptTrace/PromptTrace.js')
const Workspace = await import('../src/parts/Workspace/Workspace.js')

beforeEach(() => {
  jest.resetAllMocks()
  // @ts-ignore
  Workspace.getPath.mockReturnValue('/workspace')
})

const createTrace = () => {
  return PromptTrace.create({
    error: '',
    fileSystemAccess: undefined,
    finishedAt: '',
    id: '',
    prompt: '',
    result: undefined,
    startedAt: '',
  })
}

test('create - creates a Pi-inspired completed trace object', () => {
  const trace = PromptTrace.create({
    error: '',
    finishedAt: '2026-07-14T00:01:00.000Z',
    id: 'trace-id',
    fileSystemAccess: {
      allowRead: true,
      allowWrite: false,
      root: '.',
    },
    prompt: 'Fix the tests',
    result: {
      sessionId: 'session-1',
      task: { id: 'task-1' },
      trace: [{ content: 'Fix the tests', role: 'user', timestamp: 1 }],
    },
    startedAt: '2026-07-14T00:00:00.000Z',
  })

  expect(trace).toEqual({
    cwd: 'file:///workspace',
    finishedAt: '2026-07-14T00:01:00.000Z',
    id: 'trace-id',
    messages: [{ content: 'Fix the tests', role: 'user', timestamp: 1 }],
    prompt: 'Fix the tests',
    sandbox: {
      fileSystem: {
        allowRead: true,
        allowWrite: false,
        root: '.',
      },
    },
    sessionId: 'session-1',
    status: 'completed',
    task: { id: 'task-1' },
    timestamp: '2026-07-14T00:00:00.000Z',
    type: 'agent-trace',
    version: 1,
  })
})

test('create - parses cwd as a file URI', () => {
  // @ts-ignore
  Workspace.getPath.mockReturnValue('/workspace/project #1')

  const trace = createTrace()

  expect(trace.cwd).toBe('file:///workspace/project%20%231')
})

test('create - parses a Windows cwd as a file URI', () => {
  // @ts-ignore
  Workspace.getPath.mockReturnValue('C:\\workspace\\project')

  const trace = createTrace()

  expect(trace.cwd).toBe('file:///C:/workspace/project')
})

test('write - writes formatted JSON below the workspace', async () => {
  const trace = { cwd: 'file:///workspace', id: 'trace-id' }

  await expect(PromptTrace.write(trace)).resolves.toBe('file:///workspace/.agent-logs/trace-trace-id.json')
  expect(FileSystemDisk.mkdir).toHaveBeenCalledWith('file:///workspace/.agent-logs')
  expect(FileSystemDisk.writeFile).toHaveBeenCalledWith('file:///workspace/.agent-logs/trace-trace-id.json', JSON.stringify(trace, null, 2))
})
