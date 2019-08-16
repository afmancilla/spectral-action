import * as t from "io-ts";

export const Config = t.strict({
  GITHUB_EVENT_PATH: t.string,
  GITHUB_TOKEN: t.string,
  GITHUB_SHA: t.string,
  GITHUB_WORKSPACE: t.string,
  SPECTRAL_FILE_PATH: t.string,
  GITHUB_ACTION: t.string
});

export type Config = t.TypeOf<typeof Config>;