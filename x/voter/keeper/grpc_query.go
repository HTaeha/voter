package keeper

import (
	"github.com/coreators/voter/x/voter/types"
)

var _ types.QueryServer = Keeper{}
