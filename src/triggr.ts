export type Triggr = {
  "version": "0.1.0",
  "name": "triggr",
  "instructions": [
    {
      "name": "initializeProgram",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateServices",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "services",
          "type": {
            "vec": {
              "defined": "Middleware"
            }
          }
        }
      ]
    },
    {
      "name": "closeProgram",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createEffect",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effectPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "effectContent",
          "type": {
            "defined": "Effect"
          }
        },
        {
          "name": "triggerIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createTrigger",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "trigger",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "conditionTree",
          "type": {
            "defined": "AdjacencyTree"
          }
        },
        {
          "name": "lifetime",
          "type": {
            "defined": "Lifetime"
          }
        },
        {
          "name": "workflowTitle",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateEffect",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effectPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "effectContent",
          "type": {
            "defined": "Effect"
          }
        },
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "effectIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "executeEffect",
      "accounts": [
        {
          "name": "initiator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "trigger",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "traverse",
          "type": "bytes"
        },
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "effectIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateTrigger",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "conditions",
          "type": {
            "defined": "AdjacencyTree"
          }
        }
      ]
    },
    {
      "name": "closeEffect",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effectPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "effectIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeTrigger",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "triggerIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeUser",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawFromPayer",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "populateInstruction",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructionAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ixIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createLut",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lut",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "addressLookupTableProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "slot",
          "type": "u64"
        },
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "programState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "tempStorage",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ixs",
            "type": {
              "vec": {
                "defined": "SerializableInstruction"
              }
            }
          }
        ]
      }
    },
    {
      "name": "effect",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ixs",
            "type": {
              "vec": {
                "defined": "Ixs"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "EffectStatus"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "usageStats",
            "type": {
              "defined": "Statistics"
            }
          },
          {
            "name": "ownIndex",
            "type": "u8"
          },
          {
            "name": "parentTrigger",
            "type": "publicKey"
          },
          {
            "name": "lut",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "programState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "middleware",
            "type": {
              "vec": {
                "defined": "Middleware"
              }
            }
          }
        ]
      }
    },
    {
      "name": "trigger",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": {
              "defined": "Status"
            }
          },
          {
            "name": "usageStats",
            "type": {
              "defined": "Statistics"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "conditions",
            "type": {
              "defined": "AdjacencyTree"
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "effectCount",
            "type": "u8"
          },
          {
            "name": "ownIndex",
            "type": "u64"
          },
          {
            "name": "lifetime",
            "type": {
              "defined": "Lifetime"
            }
          },
          {
            "name": "workflowTitle",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "triggerCount",
            "type": "u64"
          },
          {
            "name": "effectCount",
            "type": "u64"
          },
          {
            "name": "activeTriggers",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Ixs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "instructions",
            "type": {
              "vec": {
                "defined": "SerializableInstruction"
              }
            }
          },
          {
            "name": "ready",
            "type": "bool"
          },
          {
            "name": "validUntilSlot",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "executed",
            "type": "bool"
          },
          {
            "name": "instructionType",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "SerializableInstruction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "docs": [
              "Pubkey of the program that executes this instruction."
            ],
            "type": "publicKey"
          },
          {
            "name": "accounts",
            "docs": [
              "Metadata describing accounts that should be passed to the program."
            ],
            "type": {
              "vec": {
                "defined": "SerializableAccount"
              }
            }
          },
          {
            "name": "data",
            "docs": [
              "Opaque data passed to the program for its own interpretation."
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "SerializableAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "docs": [
              "An account's public key"
            ],
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "docs": [
              "True if an Instruction requires a Transaction signature matching `pubkey`."
            ],
            "type": "bool"
          },
          {
            "name": "isWritable",
            "docs": [
              "True if the `pubkey` can be loaded as a read-write account."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Middleware",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "accountsCount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Statistics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "executionCount",
            "type": "u64"
          },
          {
            "name": "lastExecutedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Lifetime",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kickoffTime",
            "type": "i64"
          },
          {
            "name": "maxExecutionDate",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "nextExecutionDate",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "maxExecutionCount",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "recurrence",
            "type": {
              "option": {
                "defined": "Recurrence"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Condition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "conditionType",
            "type": "u8"
          },
          {
            "name": "conditionData",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "AdjacencyTree",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nodes",
            "type": {
              "vec": {
                "defined": "AdjacencyTreeNode"
              }
            }
          },
          {
            "name": "edges",
            "type": {
              "vec": {
                "array": [
                  "u8",
                  2
                ]
              }
            }
          }
        ]
      }
    },
    {
      "name": "AdjacencyTreeNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "condition",
            "type": {
              "defined": "Condition"
            }
          },
          {
            "name": "effectIndex",
            "type": {
              "option": "u8"
            }
          }
        ]
      }
    },
    {
      "name": "EffectStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Incomplete"
          },
          {
            "name": "Complete"
          },
          {
            "name": "Partial"
          },
          {
            "name": "Executed"
          },
          {
            "name": "Failed"
          }
        ]
      }
    },
    {
      "name": "Status",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Draft"
          },
          {
            "name": "Active"
          },
          {
            "name": "Disabled"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    },
    {
      "name": "Weekday",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Monday"
          },
          {
            "name": "Tuesday"
          },
          {
            "name": "Wednesday"
          },
          {
            "name": "Thursday"
          },
          {
            "name": "Friday"
          },
          {
            "name": "Saturday"
          },
          {
            "name": "Sunday"
          }
        ]
      }
    },
    {
      "name": "Recurrence",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Daily",
            "fields": [
              {
                "name": "time_of_day",
                "type": "string"
              }
            ]
          },
          {
            "name": "Weekly",
            "fields": [
              {
                "name": "weekdays",
                "type": {
                  "vec": {
                    "defined": "Weekday"
                  }
                }
              },
              {
                "name": "time_of_day",
                "type": "string"
              }
            ]
          },
          {
            "name": "Monthly",
            "fields": [
              {
                "name": "day_of_month",
                "type": "u8"
              },
              {
                "name": "time_of_day",
                "type": "string"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ConditionNotFound",
      "msg": "Invalid condition"
    },
    {
      "code": 6001,
      "name": "InvalidTimeCondition",
      "msg": "Time condition failed"
    },
    {
      "code": 6002,
      "name": "InvalidPriceCondition",
      "msg": "Price condition failed"
    },
    {
      "code": 6003,
      "name": "InvalidPriceFeed",
      "msg": "Invalid price feed"
    },
    {
      "code": 6004,
      "name": "UnsupportedRecurrencePattern",
      "msg": "Invalid recurrence pattern"
    }
  ]
};

export const IDL: Triggr = {
  "version": "0.1.0",
  "name": "triggr",
  "instructions": [
    {
      "name": "initializeProgram",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateServices",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "services",
          "type": {
            "vec": {
              "defined": "Middleware"
            }
          }
        }
      ]
    },
    {
      "name": "closeProgram",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeAccount",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createEffect",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effectPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "effectContent",
          "type": {
            "defined": "Effect"
          }
        },
        {
          "name": "triggerIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createTrigger",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "trigger",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "conditionTree",
          "type": {
            "defined": "AdjacencyTree"
          }
        },
        {
          "name": "lifetime",
          "type": {
            "defined": "Lifetime"
          }
        },
        {
          "name": "workflowTitle",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateEffect",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effectPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "effectContent",
          "type": {
            "defined": "Effect"
          }
        },
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "effectIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "executeEffect",
      "accounts": [
        {
          "name": "initiator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "trigger",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "traverse",
          "type": "bytes"
        },
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "effectIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateTrigger",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "conditions",
          "type": {
            "defined": "AdjacencyTree"
          }
        }
      ]
    },
    {
      "name": "closeEffect",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effectPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "triggerIndex",
          "type": "u64"
        },
        {
          "name": "effectIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeTrigger",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "triggerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "triggerIndex",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeUser",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawFromPayer",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "populateInstruction",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructionAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "ixIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createLut",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lut",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "effect",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "addressLookupTableProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "slot",
          "type": "u64"
        },
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "programState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "tempStorage",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ixs",
            "type": {
              "vec": {
                "defined": "SerializableInstruction"
              }
            }
          }
        ]
      }
    },
    {
      "name": "effect",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ixs",
            "type": {
              "vec": {
                "defined": "Ixs"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "EffectStatus"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "usageStats",
            "type": {
              "defined": "Statistics"
            }
          },
          {
            "name": "ownIndex",
            "type": "u8"
          },
          {
            "name": "parentTrigger",
            "type": "publicKey"
          },
          {
            "name": "lut",
            "type": {
              "option": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "programState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "middleware",
            "type": {
              "vec": {
                "defined": "Middleware"
              }
            }
          }
        ]
      }
    },
    {
      "name": "trigger",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "status",
            "type": {
              "defined": "Status"
            }
          },
          {
            "name": "usageStats",
            "type": {
              "defined": "Statistics"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "conditions",
            "type": {
              "defined": "AdjacencyTree"
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "effectCount",
            "type": "u8"
          },
          {
            "name": "ownIndex",
            "type": "u64"
          },
          {
            "name": "lifetime",
            "type": {
              "defined": "Lifetime"
            }
          },
          {
            "name": "workflowTitle",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "triggerCount",
            "type": "u64"
          },
          {
            "name": "effectCount",
            "type": "u64"
          },
          {
            "name": "activeTriggers",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Ixs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "instructions",
            "type": {
              "vec": {
                "defined": "SerializableInstruction"
              }
            }
          },
          {
            "name": "ready",
            "type": "bool"
          },
          {
            "name": "validUntilSlot",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "executed",
            "type": "bool"
          },
          {
            "name": "instructionType",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "SerializableInstruction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "docs": [
              "Pubkey of the program that executes this instruction."
            ],
            "type": "publicKey"
          },
          {
            "name": "accounts",
            "docs": [
              "Metadata describing accounts that should be passed to the program."
            ],
            "type": {
              "vec": {
                "defined": "SerializableAccount"
              }
            }
          },
          {
            "name": "data",
            "docs": [
              "Opaque data passed to the program for its own interpretation."
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "SerializableAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "docs": [
              "An account's public key"
            ],
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "docs": [
              "True if an Instruction requires a Transaction signature matching `pubkey`."
            ],
            "type": "bool"
          },
          {
            "name": "isWritable",
            "docs": [
              "True if the `pubkey` can be loaded as a read-write account."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Middleware",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "accountsCount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Statistics",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "executionCount",
            "type": "u64"
          },
          {
            "name": "lastExecutedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Lifetime",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kickoffTime",
            "type": "i64"
          },
          {
            "name": "maxExecutionDate",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "nextExecutionDate",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "maxExecutionCount",
            "type": {
              "option": "u8"
            }
          },
          {
            "name": "recurrence",
            "type": {
              "option": {
                "defined": "Recurrence"
              }
            }
          }
        ]
      }
    },
    {
      "name": "Condition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "conditionType",
            "type": "u8"
          },
          {
            "name": "conditionData",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "AdjacencyTree",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nodes",
            "type": {
              "vec": {
                "defined": "AdjacencyTreeNode"
              }
            }
          },
          {
            "name": "edges",
            "type": {
              "vec": {
                "array": [
                  "u8",
                  2
                ]
              }
            }
          }
        ]
      }
    },
    {
      "name": "AdjacencyTreeNode",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "condition",
            "type": {
              "defined": "Condition"
            }
          },
          {
            "name": "effectIndex",
            "type": {
              "option": "u8"
            }
          }
        ]
      }
    },
    {
      "name": "EffectStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Incomplete"
          },
          {
            "name": "Complete"
          },
          {
            "name": "Partial"
          },
          {
            "name": "Executed"
          },
          {
            "name": "Failed"
          }
        ]
      }
    },
    {
      "name": "Status",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Draft"
          },
          {
            "name": "Active"
          },
          {
            "name": "Disabled"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    },
    {
      "name": "Weekday",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Monday"
          },
          {
            "name": "Tuesday"
          },
          {
            "name": "Wednesday"
          },
          {
            "name": "Thursday"
          },
          {
            "name": "Friday"
          },
          {
            "name": "Saturday"
          },
          {
            "name": "Sunday"
          }
        ]
      }
    },
    {
      "name": "Recurrence",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Daily",
            "fields": [
              {
                "name": "time_of_day",
                "type": "string"
              }
            ]
          },
          {
            "name": "Weekly",
            "fields": [
              {
                "name": "weekdays",
                "type": {
                  "vec": {
                    "defined": "Weekday"
                  }
                }
              },
              {
                "name": "time_of_day",
                "type": "string"
              }
            ]
          },
          {
            "name": "Monthly",
            "fields": [
              {
                "name": "day_of_month",
                "type": "u8"
              },
              {
                "name": "time_of_day",
                "type": "string"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ConditionNotFound",
      "msg": "Invalid condition"
    },
    {
      "code": 6001,
      "name": "InvalidTimeCondition",
      "msg": "Time condition failed"
    },
    {
      "code": 6002,
      "name": "InvalidPriceCondition",
      "msg": "Price condition failed"
    },
    {
      "code": 6003,
      "name": "InvalidPriceFeed",
      "msg": "Invalid price feed"
    },
    {
      "code": 6004,
      "name": "UnsupportedRecurrencePattern",
      "msg": "Invalid recurrence pattern"
    }
  ]
};
